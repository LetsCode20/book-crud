import React from 'react';
// React Router Dom
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
// Components
import GetBooks from './pages/GetBooks/GetBooks';
import ShowBook from './pages/ShowBook/ShowBook';
import EditBook from './pages/EditBook/EditBook';
import CreateBook from './pages/CreateBook/CreateBook';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='books'>
            <Route index element={<GetBooks />} />
            <Route path='show'>
              <Route path=':bookId' element={<ShowBook />} />
            </Route>
            <Route path='create' element={<CreateBook />} />
            <Route path='edit'>
              <Route path=':bookId' element={<EditBook />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
