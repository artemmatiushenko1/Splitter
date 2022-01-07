import { useState } from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import SplitForm from './SplitForm';
import CalculatorContext from '../store/calculator-context';

const Calculator = () => {
  const [enteredData, setEnteredData] = useState({
    bill: '',
    tip: '',
    persons: '',
  });

  const calculateTip = (bill, tip, persons) => {
    const result = (bill * tip) / 100 / persons;
    return result;
  };

  const calculateTotal = (bill, tip, persons) => {
    const tipPerPerson = calculateTip(bill, persons, tip);
    const totalPerPerson = bill / persons + tip;
    return {
      tip: tipPerPerson,
      total: totalPerPerson,
    };
  };

  const onFormInputHandler = (data) => {
    setEnteredData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  return (
    <CalculatorContext.Provider value={{ ...enteredData }}>
      <div className="calculator">
        <SplitForm onInput={onFormInputHandler} />
        <ComputedCard
          values={calculateTotal(
            parseInt(enteredData.bill),
            parseInt(enteredData.tip),
            parseInt(enteredData.persons)
          )}
        />
      </div>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
