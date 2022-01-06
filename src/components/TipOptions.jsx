import React, { useState } from 'react';
import '../styles/TipSelect.css';
import Input from './ui/Input';

const Option = (props) => {
  return (
    <button
      className={`tip-btn ${props.className}`}
      data-tip={props.value}
      data-id={props.id}
      onClick={props.onSelected}
    >
      {props.value}%
    </button>
  );
};

const TipOptions = (props) => {
  const [selectedOptionId, setSelectedOptionId] = useState(props.value);
  const [customTip, setCustomTip] = useState('');

  const onTipSelected = (e) => {
    e.preventDefault();
    setSelectedOptionId(parseInt(e.target.dataset['id']));
    props.onTipChange(e.target.dataset['tip']);
  };

  const onCustomTipChangeHandler = (e) => {
    setSelectedOptionId(e.target.dataset['id']);
    setCustomTip(e.target.value);
    props.onTipChange(e.target.value);
  };

  return (
    <div className="input-container">
      <p className="input-label">{props.label}</p>
      <div className="tip-btns-group">
        {props.options.map((option, i) => {
          return (
            <Option
              className={selectedOptionId === i ? 'tip-btn--active' : ''}
              value={option}
              id={i}
              key={i}
              onSelected={onTipSelected}
            />
          );
        })}
        <Input
          className="custom-tip-input"
          input={{
            type: 'number',
            placeholder: 'Custom',
            'data-id': 'custom-tip',
            value: customTip,
            onChange: onCustomTipChangeHandler,
            onFocus: onCustomTipChangeHandler,
          }}
        />
      </div>
    </div>
  );
};

export default TipOptions;
