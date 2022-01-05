import { useState } from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import SplitForm from './SplitForm';
import CalculatorContext from '../store/calculator-context';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [persons, setPersons] = useState('');

  const billChangeHandler = (e) => {
    setBill(e.target.value);
  };

  const personsChangeHandler = (e) => {
    setPersons(e.target.value);
  };

  const tipChangeHandler = (tipValue) => {
    setTip(tipValue);
  };

  return (
    <CalculatorContext.Provider value={{ bill, persons, tip }}>
      <div className="calculator">
        <SplitForm
          onBillChange={billChangeHandler}
          onPersonsChange={personsChangeHandler}
          onTipChange={tipChangeHandler}
        />
        <ComputedCard />
      </div>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
