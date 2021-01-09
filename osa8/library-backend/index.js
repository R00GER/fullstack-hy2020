const { ApolloServer, gql, UserInputError } = require('apollo-server');
const { PubSub } = require('apollo-server');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Book = require('./models/Book');
const Author = require('./models/Author');

const pubsub = new PubSub();

const JWT_SECRET = process.env.SECRET_KEY;

const typeDefs = gql`
  type User {
    username: String!
    favoriteGenre: String!
    id: ID
  }

  type Token {
    value: String!
  }

  type Author {
    name: String!
    born: Int
    bookCount: Int!
  }

  type Book {
    title: String!
    published: Int!
    author: Author!
    genres: [String!]!
    id: ID!
  }

  type Subscription {
    bookAdded: Book!
  }

  type Mutation {
    addBook(title: String!, author: String!, published: Int!, genres: [String]): Book
    editAuthor(name: String!, setBornTo: Int!): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }
`;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

const resolvers = {
  Author: {
    bookCount: async (root) => {
      const books = await Book.find({}).populate('author', { name: 1 });
      const authorsBooks = books.filter((book) => book.author.name === root.name).length;
      return authorsBooks;
    },
  },

  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new UserInputError('Not authenticated', {
          invalidArgs: args.author,
        });
      }

      if (args.author.length < 4) {
        throw new UserInputError('Too short author name', {
          invalidArgs: args.author,
        });
      }

      if (args.title.length < 3) {
        throw new UserInputError('Too short book name', {
          invalidArgs: args.title,
        });
      }

      const year = /^\d{4}$/.test(args.published);

      if (!year) {
        throw new UserInputError('Julkaisuvuosi on oltava vuosiluku', {
          invalidArgs: args.published,
        });
      }

      const author = await Author.findOne({ name: args.author });
      let newAuthor = null;

      if (!author) {
        newAuthor = new Author({ name: args.author });
        const savedNewAuthor = await newAuthor.save();
      }

      const book = new Book({ ...args, author: author || newAuthor });

      try {
        const savedBook = await book.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      }

      pubsub.publish('BOOK_ADDED', { bookAdded: book })

      return book;
    },
    editAuthor: async (root, args, context) => {
      const filter = { name: args.name };
      const update = { born: args.setBornTo };

      if (!context.currentUser) {
        throw new UserInputError('Not authenticated', {
          invalidArgs: args.author,
        });
      }

      const updatedAuthor = await Author.findOneAndUpdate(filter, update, {
        new: true,
      });

      if (!updatedAuthor) {
        return null;
      }

      return updatedAuthor;
    },
    createUser: async (root, args) => {
      const user = new User({ username: args.username, favoriteGenre: args.favoriteGenre });

      return user.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      });
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== 'secret') {
        throw new UserInputError('wrong credentials');
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, JWT_SECRET) };
    },
  },

  Query: {
    me: (root, args, context) => {
      console.log('cur', context.currentUser);
      return context.currentUser;
    },
    // bookCount: () => books.length,
    bookCount: async () => await Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      // if (args.author && args.genre) {
      //   return books.filter(
      //     (book) => book.author === args.author && book.genres.includes(args.genre)
      //   );
      // }

      // if (args.author) {
      //   return books.filter((book) => book.author === args.author);
      // }

      // if (args.genre) {
      //   return books.filter((book) => book.genres.includes(args.genre));
      // }
      const books = await Book.find({}).populate('author', { name: 1 });
      return books;
    },
    allAuthors: async () => {
      const authors = await Author.find({});
      return authors;
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(['BOOK_ADDED']),
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET);
      const currentUser = await User.findById(decodedToken.id);
      return { currentUser };
    }
  },
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`)
  console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})
