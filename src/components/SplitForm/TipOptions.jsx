import React, { useEffect, useState } from 'react';
import './TipOptions.css';
import Input from '../ui/Input';

const Option = (props) => {
  return (
    <button
      className={`option ${props.className}`}
      data-tip={props.value}
      data-id={props.id}
      onClick={props.onSelected}
    >
      {props.value}%
    </button>
  );
};

const TipOptions = (props) => {
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const [customTip, setCustomTip] = useState('');

  useEffect(() => {
    if (props.value === '') {
      setSelectedOptionId('');
      setCustomTip('');
    }
  }, [props.value]);

  const onOptionSelected = (e) => {
    e.preventDefault();
    setSelectedOptionId(parseInt(e.target.dataset['id']));
    props.onTipChange(e.target.dataset['tip']);
  };

  const onCustomOptionChangeHandler = (e) => {
    setSelectedOptionId(e.target.id);
    setCustomTip(e.target.value);
    props.onTipChange(e.target.value);
  };

  return (
    <div className="input-container">
      <p className="input-label">{props.label}</p>
      <div className="options-group">
        {props.options.map((option, i) => {
          return (
            <Option
              className={selectedOptionId === i ? 'option--active' : ''}
              value={option}
              id={i}
              key={i}
              onSelected={onOptionSelected}
            />
          );
        })}
        <Input
          className="custom-tip-input"
          id="custom-tip"
          input={{
            type: 'number',
            placeholder: 'Custom',
            value: customTip,
            onChange: onCustomOptionChangeHandler,
            onFocus: onCustomOptionChangeHandler,
          }}
        />
      </div>
    </div>
  );
};

export default TipOptions;
