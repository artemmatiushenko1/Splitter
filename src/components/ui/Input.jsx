import React from 'react';

const Input = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input
        className={'input ' + props.className}
        type={props.type}
        value={props.value}
        data-id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export default Input;
