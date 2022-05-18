import React, { useState } from 'react';
// useMutation Apollo
import { useMutation } from '@apollo/client';
// React Router Dom
import { Link, useParams, useNavigate } from 'react-router-dom';
// GraphQL Mutations
import { UPDATE_BOOK_MUTATION } from '../../GraphQL/Mutations';
// Style
import './EditBook.scss';

const EditBook = () => {
  const { bookId } = useParams();
  let navigate = useNavigate();

  const [updateIsbn, setUpdateIsbn] = useState(0);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateAuthor, setUpdateAuthor] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updatePublished_year, setUpdatePublished_year] = useState(0);
  const [updatePublisher, setUpdatePublisher] = useState('');

  const [updateBook, { error }] = useMutation(UPDATE_BOOK_MUTATION);

  if (error) return <p>Error :(</p>;

  const handleUpdateBook = () => {
    if (
      !updateIsbn ||
      !updateTitle ||
      !updateAuthor ||
      !updateDescription ||
      !updatePublished_year ||
      !updatePublisher
    ) {
      return;
    }

    updateBook({
      variables: {
        id: bookId,
        isbn: updateIsbn,
        title: updateTitle,
        author: updateAuthor,
        description: updateDescription,
        published_year: updatePublished_year,
        publisher: updatePublisher,
      },
    });

    if (error) {
      throw new Error(error);
    }

    navigate('/books');
  };
  return (
    <div>
      <h2>Create a Book</h2>
      <form onSubmit={handleUpdateBook}>
        <div className='formInput'>
          <label htmlFor='isbn'>ISBN</label>
          <input
            type='number'
            id='isbn'
            onChange={(e) => setUpdateIsbn(e.target.value)}
            placeholder=' International Standard Book Number'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            onChange={(e) => setUpdateTitle(e.target.value)}
            // value={title}
            placeholder='Title of the Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            onChange={(e) => setUpdateAuthor(e.target.value)}
            // value={author}
            placeholder='Author of the Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='description'>Description</label>
          <textarea
            rows={10}
            columns={10}
            id='description'
            onChange={(e) => setUpdateDescription(e.target.value)}
            // value={description}
            placeholder='Enter the description of Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='publishedyear'>Published Year</label>
          <input
            type='number'
            id='publishedyear'
            onChange={(e) => setUpdatePublished_year(parseInt(e.target.value))}
            // value={published_year}
            placeholder='Published Year of the Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='publihser'>Publihser</label>
          <input
            type='text'
            id='publihser'
            onChange={(e) => setUpdatePublisher(e.target.value)}
            // value={publisher}
            placeholder='Publihser of the Book'
            required
          />
        </div>
        <div className='formButton'>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <Link to='/books'>Go to Books</Link>
    </div>
  );
};

export default EditBook;
