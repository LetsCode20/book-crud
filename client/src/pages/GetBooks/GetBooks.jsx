import React, { useEffect, useState } from 'react';
// useBooks Hooks
import { useBooks } from '../../hooks/useBooks';
// Components
import List from '../../components/List/List';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
// Style
import './GetBooks.scss';

const GetBooks = () => {
  const { loading, error, data } = useBooks();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.getAllBooks);
    }
  }, [data, books]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <List books={books} />
    </div>
  );
};

export default GetBooks;
