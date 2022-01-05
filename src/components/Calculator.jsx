import { useState } from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import InputsCard from './InputsCard';
import CalculatorContext from '../store/calculator-context';

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [persons, setPersons] = useState(0);
  const [tip, setTip] = useState(0);

  const changeBill = (bill) => {
    setBill(parseInt(bill));
  };

  const changePersons = (persons) => {
    setPersons(parseInt(persons));
  };

  const changeTip = (tip) => {
    setTip(parseInt(tip));
  };

  const onFormReset = () => {
    const allTipBtns = document.querySelectorAll('.tip-btn');
    const customTipInput = document.querySelectorAll('.custom-tip-input');
    allTipBtns.forEach((btn) => {
      btn.classList.remove('tip-btn--active');
    });
    customTipInput.value = '';
    setBill(0);
    setPersons(0);
    setTip(0);
  };

  return (
    <CalculatorContext.Provider value={{ bill, persons, tip }}>
      <form className="calculator" autoComplete="off" onReset={onFormReset}>
        <InputsCard
          changeBill={changeBill}
          changePersons={changePersons}
          changeTip={changeTip}
        />
        {/* TODO: move ComputedCard outside of the form */}
        <ComputedCard />
      </form>
    </CalculatorContext.Provider>
  );
}
