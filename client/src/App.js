import React from 'react';
// React Router Dom
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
// Components
import GetBooks from './components/GetBooks/GetBooks';
import ShowBook from './components/ShowBook/ShowBook';
import EditBook from './components/EditBook/EditBook';
import CreateBook from './components/CreateBook/CreateBook';

const App = () => {
  return (
    <div className='app'>
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
