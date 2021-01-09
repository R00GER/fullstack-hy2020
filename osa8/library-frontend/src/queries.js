import { gql } from '@apollo/client';

// allAuthors {
//   name
//   born
//   bookCount
// }
// allBooks {
//   title
//   published
//   author
//   id
// }

// allBooks {
//   title
//   published
//   author {
//     name
//   }
//   id
//   genres
// }

const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    title
    published
    author {
      name
    }
    id
    genres
  }
`;

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}
`;

export const ALL_AUTHORS_AND_BOOKS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
    allBooks {
    title
   published
   author {
     name
   }
   id
   genres
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String]) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      title
      author {
        name
        born
      }
      published
    }
  }
`;

export const ADD_BORNYEAR = gql`
  mutation addBornYear($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;

export const ME = gql`
  query me {
    me {
      id
      favoriteGenre
    }
  }
`;
