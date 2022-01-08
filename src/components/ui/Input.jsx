import React from 'react';
import './Input.css';

const Label = (props) => {
  const classNames = `input-label ${props.className || ''}`;

  return (
    <label htmlFor={props.id} className={classNames}>
      {props.content}
    </label>
  );
};

const Input = (props) => {
  const isValid = props.isValid === false;

  return (
    <div className="input-container">
      <Label id={props.id} content={props.label} />
      {isValid && (
        <Label
          id={props.id}
          content={props.errorLabel}
          className="input-label--error"
        />
      )}
      <input
        className={`input ${props.className} ${isValid ? 'invalid' : ''}`}
        id={props.id}
        {...props.input}
      />
    </div>
  );
};

export default Input;
