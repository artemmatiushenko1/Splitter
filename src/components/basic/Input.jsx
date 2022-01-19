import React from 'react';
import './Input.css';

const Label = ({ className, id, content }) => {
  const classNames = `input-label ${className || ''}`;

  return (
    <label htmlFor={id} className={classNames}>
      {content}
    </label>
  );
};

const Input = ({ isValid, label, id, errorLabel, className, input }) => {
  const isInputValid = isValid === false;

  return (
    <div className="input-container">
      <Label id={id} content={label} />
      {isInputValid && (
        <Label id={id} content={errorLabel} className="input-label--error" />
      )}
      <input
        className={`input ${className} ${isInputValid ? 'invalid' : ''}`}
        id={id}
        {...input}
      />
    </div>
  );
};

export default Input;
