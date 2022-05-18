import React, { useEffect, useState } from 'react';
// Style
import './GetBooks.scss';
// Components
import DataTable from '../Table/Table';
// useBooks Hooks
import { useBooks } from '../../hooks/useBooks';

const GetBooks = () => {
  const { loading, error, data } = useBooks();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.getAllBooks);
    }
  }, [data, books]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <DataTable books={books} />
    </div>
  );
};

export default GetBooks;
