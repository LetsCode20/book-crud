import React from 'react';
// Style
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div>
      <svg className='spinner' viewBox='0 0 50 50'>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='5'
        ></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
