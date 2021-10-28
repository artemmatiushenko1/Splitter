import React from 'react';
import TipSelect from './TipSelect';
import '../styles/InputsCard.css';

export default function InputsCard() {
  return (
    <div className="inputs-card">
      <div className="input-container">
        <label htmlFor="#input-bill" className="input-label">
          Bill
        </label>
        <input type="text" id="input-bill" className="input input-bill" />
      </div>

      <div className="input-container">
        <p className="input-label">Select tip %</p>
        <TipSelect />
      </div>

      <div className="input-container">
        <label htmlFor="#input-persons" className="input-label">
          Number Of People
        </label>
        <input type="text" id="input-persons" className="input input-persons" />
      </div>
    </div>
  );
}
