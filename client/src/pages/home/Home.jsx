import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h4>
        <Link to='/books'>List of Books</Link>
      </h4>
      <h4>
        <Link to='/books/create'>Add Book</Link>
      </h4>
    </div>
  );
};

export default Home;
