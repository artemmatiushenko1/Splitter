import React from 'react';
import '../styles/Calculator.css';
import ComputedCard from './ComputedCard';
import InputsCard from './InputsCard';

export default function Calculator() {
  return (
    <div className="calculator">
      <InputsCard />
      <ComputedCard />
    </div>
  );
}
