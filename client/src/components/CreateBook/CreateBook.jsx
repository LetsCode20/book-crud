import React, { useState } from 'react';
// useMutation Apollo
import { useMutation } from '@apollo/client';
// React Router Dom
import { Link, useNavigate } from 'react-router-dom';

// Book Mutation
import { ADD_BOOK_MUTATION } from '../../GraphQL/Mutations';
// Style
import './CreateBook.scss';

const CreateBook = () => {
  let navigate = useNavigate();

  const [isbn, setIsbn] = useState(0);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [published_year, setPublished_year] = useState(0);
  const [publisher, setPublisher] = useState('');

  const [addBook, { error }] = useMutation(ADD_BOOK_MUTATION);

  const handleAddBook = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        isbn: isbn,
        title: title,
        author: author,
        description: description,
        publisher: publisher,
        published_year: published_year,
      },
    });
    setIsbn(0);
    setTitle('');
    setAuthor('');
    setDescription('');
    setPublished_year(0);
    setPublisher('');

    // Redirect to Home Page
    navigate('/');

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create a Book</h2>
      <form onSubmit={handleAddBook}>
        <div className='formInput'>
          <label htmlFor='isbn'>ISBN</label>
          <input
            type='number'
            id='isbn'
            onChange={(e) => setIsbn(e.target.value)}
            placeholder=' International Standard Book Number'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title of the Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            onChange={(e) => setAuthor(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter the description of Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='publishedyear'>Published Year</label>
          <input
            type='number'
            id='publishedyear'
            onChange={(e) => setPublished_year(parseInt(e.target.value))}
            placeholder='Published Year of the Book'
            required
          />
        </div>
        <div className='formInput'>
          <label htmlFor='publihser'>Publihser</label>
          <input
            type='text'
            id='publihser'
            onChange={(e) => setPublisher(e.target.value)}
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

export default CreateBook;
