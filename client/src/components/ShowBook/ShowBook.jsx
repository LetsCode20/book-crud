import React, { useEffect, useState } from 'react';
// React Router Dom
import { Link, useParams } from 'react-router-dom';
// Style
import './ShowBook.scss';
// useBook Hook
import { useBook } from '../../hooks/useBook';

const ShowBook = () => {
  const { bookId } = useParams();
  const { loading, error, data } = useBook(bookId);
  const [book, setBook] = useState([]);

  useEffect(() => {
    if (data) {
      setBook(data.getBook);
    }
  }, [data]);

  const { _id, isbn, title, author, description, published_year, publisher } =
    book;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>id: {_id}</p>
      <p>isbn: {isbn}</p>
      <p>title: {title}</p>
      <p>author: {author}</p>
      <p>description: {description}</p>
      <p>publihser: {publisher}</p>
      <p>published_year: {published_year}</p>
      <Link to='/'>Home Page</Link>
      <br />
      <Link to='/books'>Books</Link>
    </div>
  );
};

export default ShowBook;
