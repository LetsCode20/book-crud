import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query {
    getAllBooks {
      _id
      isbn
      title
      author
      description
      published_year
      publisher
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: String!) {
    getBook(id: $id) {
      _id
      isbn
      title
      author
      description
      published_year
      publisher
      updated_date
    }
  }
`;
