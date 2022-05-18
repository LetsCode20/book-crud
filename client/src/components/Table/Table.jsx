import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { useMutation } from '@apollo/client';
import { REMOVE_BOOK_MUTATION } from '../../GraphQL/Mutations';

const DataTable = ({ books }) => {
  let navigate = useNavigate('');
  const [removeBook, { error }] = useMutation(REMOVE_BOOK_MUTATION);

  const handleRemoveBook = (id) => {
    removeBook({
      variables: {
        id,
      },
    });

    if (error) {
      console.log(error);
    }

    navigate('/');
  };

  return (
    <>
      <h2>List of Books</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Isbn</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Publisher</TableCell>
              <TableCell>Published Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow
                key={book._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {book._id}
                </TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>
                  <Link to={`/books/show/${book._id}`}>{book.title}</Link>
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>{book.publisher}</TableCell>
                <TableCell>{book.published_year}</TableCell>
                <TableCell>
                  <Link to={`edit/${book._id}`}>
                    <EditRoundedIcon />
                  </Link>
                  <div>
                    <DeleteRoundedIcon
                      onClick={() => handleRemoveBook(book._id)}
                    />
                  </div>
                  <Link to={`show/${book._id}`}>
                    <VisibilityRoundedIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to='/'>Home Page</Link>
      <br />
      <Link to='/books/create'>Create Book</Link>
    </>
  );
};

export default DataTable;
