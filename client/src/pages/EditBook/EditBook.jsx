import React from 'react';
// React Router Dom
import { Link, useParams, useNavigate } from 'react-router-dom';
// useMutation Apollo
import { useMutation } from '@apollo/client';
// GraphQL Mutations
import { UPDATE_BOOK_MUTATION } from '../../GraphQL/Mutations';
// React Hook Form
import { useForm } from 'react-hook-form';
// Yup Resolver
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import FormInput from '../../components/FormInput/FormInput';
// Schema Validation
import { YupBookSchema } from '../../assets/yupSchema/YupBookSchema';
// Style
import './EditBook.scss';

const EditBook = () => {
  const { bookId } = useParams();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupBookSchema),
  });

  const [updateBook, { error }] = useMutation(UPDATE_BOOK_MUTATION);

  if (error) return <p>Error :(</p>;

  const handleUpdateBook = ({
    isbn,
    title,
    author,
    description,
    published_year,
    publisher,
  }) => {
    updateBook({
      variables: {
        id: bookId,
        isbn: isbn,
        title: title,
        author: author,
        description: description,
        published_year: published_year,
        publisher: publisher,
      },
    });

    if (error) {
      throw new Error(error);
    }

    navigate('/books');
  };

  return (
    <div className='form'>
      <div className='formContainer'>
        <h2 className='formTitle'>Update Book</h2>
        <form onSubmit={handleSubmit(handleUpdateBook)}>
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
              placeholder='Enter description'
              description='true'
              {...register('description')}
              error={errors?.description?.message}
            />
          </div>

          <button className='formButton'>Submit</button>
        </form>

        <Link className='formLink' to='/books'>
          Go to Books
        </Link>
      </div>
    </div>
  );
};

export default EditBook;
