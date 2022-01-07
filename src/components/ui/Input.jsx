import React from 'react';

const Label = (props) => {
  const classNames = `input-label ${props.className || ''}`;

  return (
    <label htmlFor={props.id} className={classNames}>
      {props.content}
    </label>
  );
};

const Input = (props) => {
  return (
    <div className="input-container">
      <Label id={props.id} content={props.label} />
      {props.isValid === false && (
        <Label
          id={props.id}
          content={props.errorLabel}
          className={'input-label--error'}
        />
      )}
      <input
        className={`input ${props.className} ${
          props.isValid === false ? 'invalid' : ''
        }`}
        id={props.id}
        {...props.input}
      />
    </div>
  );
};

export default Input;
