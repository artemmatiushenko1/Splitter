import { useState } from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import InputsCard from './InputsCard';

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [persons, setPersons] = useState(0);

  const changeBill = (bill) => {
    setBill(parseInt(bill));
  };

  const changePersons = (persons) => {
    setPersons(parseInt(persons));
    console.log(parseInt(persons));
  };

  return (
    <div className="calculator">
      <InputsCard changeBill={changeBill} changePersons={changePersons} />
      <ComputedCard bill={bill} persons={persons} />
    </div>
  );
}
