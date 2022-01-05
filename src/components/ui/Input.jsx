import React from 'react';

const Input = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        className={'input ' + props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
