import { gql } from '@apollo/client';

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
      author
      id
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String]) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      title
      author
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
