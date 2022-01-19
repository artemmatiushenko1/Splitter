import React, { useEffect, useState } from 'react';
import './TipOptions.css';
import Input from '../basic/Input';
import Option from './Option';

const TipOptions = ({ value, onTipChange, label, options }) => {
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const [customTip, setCustomTip] = useState('');

  useEffect(() => {
    if (value === '') {
      setSelectedOptionId('');
      setCustomTip('');
    }
  }, [value]);

  const onOptionSelected = (e) => {
    e.preventDefault();
    setSelectedOptionId(parseInt(e.target.dataset['id']));
    onTipChange(e.target.dataset['tip']);
  };

  const onCustomOptionChangeHandler = (e) => {
    setSelectedOptionId(e.target.id);
    setCustomTip(e.target.value);
    onTipChange(e.target.value);
  };

  return (
    <div className="input-container">
      <p className="input-label">{label}</p>
      <div className="options-group">
        {options.map((option, i) => {
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
