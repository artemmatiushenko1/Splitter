import { useState } from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import InputsCard from './InputsCard';

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

  const resetValues = () => {
    setBill(0);
    setPersons(0);
    setTip(0);
  };

  return (
    <div className="calculator">
      <InputsCard
        changeBill={changeBill}
        changePersons={changePersons}
        changeTip={changeTip}
      />
      <ComputedCard
        bill={bill}
        persons={persons}
        tip={tip}
        onReset={resetValues}
      />
    </div>
  );
}
