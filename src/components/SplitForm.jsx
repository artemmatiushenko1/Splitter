import React, { useState } from 'react';
import '../styles/InputsCard.css';
import Input from './ui/Input';
import TipOptions from './TipOptions';

const SplitForm = (props) => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [persons, setPersons] = useState('');
  const [isPersonsValid, setIsPersonsValid] = useState(null);

  const billChangeHandler = (e) => {
    setBill(e.target.value);
    props.onInput({ bill: e.target.value });
  };

  const tipChangeHandler = (tipValue) => {
    setTip(tipValue);
    props.onInput({ tip: tipValue });
  };

  const personsChangeHandler = (e) => {
    setPersons(e.target.value);
    if (e.target.value === '0') {
      setIsPersonsValid(false);
      return;
    }
    setIsPersonsValid(true);
    props.onInput({ persons: e.target.value });
  };

  return (
    <form className="inputs-card" autoComplete="off">
      <Input
        label="Bill"
        className="input-bill"
        id="input-bill"
        input={{
          name: 'bill',
          type: 'number',
          value: bill,
          placeholder: '0',
          onChange: billChangeHandler,
        }}
      />
      <TipOptions
        value={tip}
        options={[5, 10, 15, 25, 50]}
        label="Select tip %"
        onTipChange={tipChangeHandler}
      />
      <Input
        label="Number of People"
        className="input-persons"
        id="input-persons"
        isValid={isPersonsValid}
        errorLabel="Cant't be zero!"
        input={{
          name: 'persons',
          type: 'number',
          value: persons,
          placeholder: '0',
          onChange: personsChangeHandler,
        }}
      />
    </form>
  );
};

export default SplitForm;
