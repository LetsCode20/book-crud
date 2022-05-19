import React from 'react';

const FormInput = React.forwardRef(
  ({ register, error, id, label, ...otherProps }, ref) => {
    return (
      <div className='formInputs'>
        {label ? (
          <label className='formLabel' htmlFor={id}>
            {label}
          </label>
        ) : null}
        <br />
        {!otherProps.description ? (
          <input id={id} ref={ref} className='formInput' {...otherProps} />
        ) : (
          <textarea
            id={id}
            ref={ref}
            className='formTextArea'
            {...otherProps}
          />
        )}
        {error && <div className='errorInput'>{error}</div>}
      </div>
    );
  }
);

export default FormInput;
