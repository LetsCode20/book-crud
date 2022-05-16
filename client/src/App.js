import React from 'react';
// React Router Dom
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
// Components
import ShowBook from './components/show/ShowBook';
import EditBook from './components/edit/EditBook';
import CreateBook from './components/create/CreateBook';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='books'>
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
