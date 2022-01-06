import React from 'react';

const Input = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input
        className={'input ' + props.className}
        id={props.id}
        {...props.input}
      />
    </div>
  );
};

export default Input;
