import React from 'react';
import TipSelect from './TipSelect';
import '../styles/InputsCard.css';
import Input from './ui/Input';

export default function InputsCard({ changeBill, changePersons, changeTip }) {
  return (
    <div className="inputs-card">
      <Input
        className="input-bill"
        id="input-bill"
        placeholder="0"
        label="Bill"
        onChange={(e) => {
          changeBill(e.target.value);
        }}
      />

      <div className="input-container">
        <p className="input-label">Select tip %</p>
        <TipSelect changeTip={changeTip} />
      </div>

      <Input
        className="input-persons"
        id="input-persons"
        placeholder="0"
        label="Number of People"
        onChange={(e) => {
          changePersons(e.target.value);
        }}
      />
    </div>
  );
}
