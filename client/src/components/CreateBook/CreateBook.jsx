import React from 'react';
// React Router Dom
import { Link, useNavigate } from 'react-router-dom';
// useMutation Apollo
import { useMutation } from '@apollo/client';
// Book Mutation
import { ADD_BOOK_MUTATION } from '../../GraphQL/Mutations';
// React Hook Form
import { useForm } from 'react-hook-form';
// Yup Resolver
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import FormInput from '../FormInput/FormInput';
// Schema Validation
import { YupBookSchema } from '../../assets/yupSchema/YupBookSchema';
// Style
import './CreateBook.scss';

const CreateBook = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupBookSchema),
  });

  const [addBook, { error }] = useMutation(ADD_BOOK_MUTATION);

  const handleAddBook = ({
    isbn,
    title,
    author,
    description,
    published_year,
    publisher,
  }) => {
    addBook({
      variables: {
        isbn: isbn,
        title: title,
        author: author,
        description: description,
        published_year: published_year,
        publisher: publisher,
      },
    });

    // Redirect to Home Page
    navigate('/');

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className='form'>
      <div className='formContainer'>
        <h2 className='formTitle'>Create a Book</h2>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <div className='formGroup'>
            <FormInput
              id='isbn'
              type='text'
              name='isbn'
              label='Isbn'
              placeholder='Enter isbn'
              {...register('isbn')}
              error={errors?.isbn?.message}
            />

            <FormInput
              id='title'
              type='text'
              name='title'
              label='Title'
              placeholder='Enter title'
              {...register('title')}
              error={errors?.title?.message}
            />

            <FormInput
              id='author'
              type='text'
              name='author'
              label='Author'
              placeholder='Enter author'
              {...register('author')}
              error={errors?.author?.message}
            />

            <FormInput
              id='publihsed_year'
              type='number'
              name='publihsed_year'
              label='Published_year'
              placeholder='Enter publisher_year'
              {...register('published_year')}
              error={errors?.published_year?.message}
            />

            <FormInput
              id='publihser'
              type='text'
              name='publihser'
              label='Publisher'
              placeholder='Enter publisher'
              {...register('publisher')}
              error={errors?.publisher?.message}
            />

            <FormInput
              id='description'
              type='text'
              name='description'
              label='Description'
              description='true'
              placeholder='Enter description'
              {...register('description')}
              error={errors?.description?.message}
            />
          </div>

          <button className='formButton'>Submit</button>
        </form>

        <Link to='/books'>Go to Books</Link>
      </div>
    </div>
  );
};

export default CreateBook;
