import React, { useContext } from 'react';
import '../styles/InputsCard.css';
import Input from './ui/Input';
import CalculatorContext from '../store/calculator-context';
import TipOptions from './TipOptions';

const SplitForm = (props) => {
  const { bill, persons, tip } = useContext(CalculatorContext);

  return (
    <form className="inputs-card" autoComplete="off">
      <Input
        label="Bill"
        className="input-bill"
        id="input-bill"
        input={{
          type: 'number',
          value: bill,
          placeholder: '0',
          onChange: props.onBillChange,
        }}
      />
      <TipOptions
        value={tip}
        options={[5, 10, 15, 25, 50]}
        label="Select tip %"
        onTipChange={props.onTipChange}
      />
      <Input
        label="Number of People"
        className="input-persons"
        id="input-persons"
        input={{
          type: 'number',
          value: persons,
          placeholder: '0',
          onChange: props.onPersonsChange,
        }}
      />
    </form>
  );
};

export default SplitForm;
