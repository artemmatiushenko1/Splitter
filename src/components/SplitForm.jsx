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
        id="input-bill"
        className="input-bill"
        type="number"
        value={bill}
        placeholder="0"
        label="Bill"
        onChange={props.onBillChange}
      />
      <TipOptions
        value={tip}
        options={[5, 10, 15, 25, 50]}
        label="Select tip %"
        onTipChange={props.onTipChange}
      />
      <Input
        id="input-persons"
        className="input-persons"
        type="number"
        value={persons}
        placeholder="0"
        label="Number of People"
        onChange={props.onPersonsChange}
      />
    </form>
  );
};

export default SplitForm;
