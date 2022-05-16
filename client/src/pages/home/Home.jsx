import React from 'react';

import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
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

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getAllBooks } = data;
  console.log('getAllBook', getAllBooks);

  return (
    <div>
      {getAllBooks.map((book) => (
        <div key={book.title}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
