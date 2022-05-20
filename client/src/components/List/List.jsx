import React from 'react';
// React Router Dom
import { Link, useNavigate } from 'react-router-dom';
// Material UI Table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// Use Mutation Apollo Client
import { useMutation } from '@apollo/client';
// Icons
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
// Remove Book Mutation
import { REMOVE_BOOK_MUTATION } from '../../GraphQL/Mutations';
// Style
import './List.scss';
// Icon
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const List = ({ books }) => {
  let navigate = useNavigate('');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Handle Change Page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Handle Remove Book
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

  const tableHeader = [
    { id: 1, field: 'id', headerName: 'ID', flex: 1 },
    { id: 2, field: 'title', headerName: 'Title', flex: 1 },
    { id: 3, field: 'author', headerName: 'Author', flex: 1 },
    {
      id: 4,
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      id: 5,
      field: 'publisher',
      headerName: 'Publisher',
      flex: 1,
    },
    {
      id: 6,
      field: 'published_year',
      headerName: 'Published Year',
      flex: 1,
    },
    {
      id: 7,
      field: 'action',
      headerName: 'Action',
      flex: 1,
    },
  ];

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Book
        <Link to='create' className='link'>
          <AddCircleOutlineIcon />
          Add new
        </Link>
      </div>

      <Paper
        sx={{ width: '100%', overflow: 'hidden' }}
        className='tableContainer'
      >
        <TableContainer sx={{ maxHeight: 440 }} className='table'>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {tableHeader.map((column) => (
                  <TableCell
                    className='tableCell'
                    key={column.id}
                    style={{ minWidth: 100 }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {books
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((book) => {
                  const bookSlice = (bookCont) =>
                    bookCont.length > 50
                      ? `${bookCont.slice(0, 50)}...`
                      : bookCont;

                  return (
                    <TableRow tabIndex={-1} key={book._id}>
                      <TableCell className='tableCell'>{book._id}</TableCell>
                      <TableCell className='tableCell'>
                        {bookSlice(book.title)}
                      </TableCell>
                      <TableCell className='tableCell'>
                        {bookSlice(book.author)}
                      </TableCell>
                      <TableCell className='tableCell'>
                        {bookSlice(book.description)}
                      </TableCell>
                      <TableCell className='tableCell'>
                        {bookSlice(book.publisher)}
                      </TableCell>
                      <TableCell className='tableCell'>
                        {bookSlice(book.published_year)}
                      </TableCell>
                      <TableCell className='tableCell'>
                        <div className='cellAction'>
                          <Link to={`edit/${book._id}`}>
                            <EditRoundedIcon className='icon editButton' />
                          </Link>
                          <div>
                            <DeleteRoundedIcon
                              onClick={() => handleRemoveBook(book._id)}
                              className='icon removeButton'
                            />
                          </div>
                          <Link to={`show/${book._id}`}>
                            <VisibilityRoundedIcon className='icon viewButton' />
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className='tablePagination'
          rowsPerPageOptions={[1, 10, 25, 100]}
          component='div'
          count={books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default List;
