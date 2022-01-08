import React, { useContext } from 'react';
import '../styles/SplitForm.css';
import Input from './ui/Input';
import TipOptions from './TipOptions';
import CalculatorContext from '../store/calculator-context';

const SplitForm = (props) => {
  const { bill, tip, persons, isPersonsValid } = useContext(CalculatorContext);

  return (
    <form className="split-form" autoComplete="off">
      <Input
        label="Bill"
        className="input-bill"
        id="input-bill"
        input={{
          name: 'bill',
          type: 'number',
          value: bill,
          placeholder: '0',
          onChange: props.onBillInput,
        }}
      />
      <TipOptions
        value={tip}
        options={[5, 10, 15, 25, 50]}
        label="Select tip %"
        onTipChange={props.onTipInput}
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
          onChange: props.onPersonsInput,
        }}
      />
    </form>
  );
};

export default SplitForm;
