import { useEffect, useState } from 'react';
import './Calculator.css';
import OutputCard from '../OutputCard/OutputCard';
import SplitForm from '../SplitForm/SplitForm';
import CalculatorContext from '../../store/calculator-context';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [persons, setPersons] = useState('');
  const [isPersonsValid, setIsPersonsValid] = useState(null);
  const [tipPerPerson, setTipPerPerson] = useState('');
  const [totalPerPerson, setTotalPerPerson] = useState('');

  const calculate = (bill, persons, tip) => {
    if ((!tip && !persons) || !persons) {
      setTipPerPerson('');
      setTotalPerPerson('');
      return;
    }
    const calculatedTip = (bill * tip) / 100 / persons;
    const calculatedTotal = bill / persons + calculatedTip;
    setTipPerPerson(calculatedTip);
    setTotalPerPerson(calculatedTotal);
  };

  useEffect(() => {
    calculate(bill, persons, tip);
  }, [bill, tip, persons]);

  const onBillChangeHandler = (e) => {
    setBill(e.target.value);
  };

  const onTipChangeHandler = (tipValue) => {
    setTip(tipValue);
  };

  const onPersonsChangeHandler = (e) => {
    if (e.target.value === '0') {
      setIsPersonsValid(false);
      return;
    }
    setIsPersonsValid(true);
    setPersons(e.target.value);
  };

  const onFormResetHandler = () => {
    setBill('');
    setPersons('');
    setTip('');
    setIsPersonsValid(null);
    setTipPerPerson('');
    setTotalPerPerson('');
  };

  const providedValues = {
    bill,
    tip,
    persons,
    isPersonsValid,
    tipPerPerson,
    totalPerPerson,
  };

  return (
    <CalculatorContext.Provider value={providedValues}>
      <main className="calculator">
        <SplitForm
          onBillInput={onBillChangeHandler}
          onTipInput={onTipChangeHandler}
          onPersonsInput={onPersonsChangeHandler}
        />
        <OutputCard onReset={onFormResetHandler} />
      </main>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
