import React from 'react';
import TipSelect from './TipSelect';

export default function InputsCard() {
  return (
    <div className="inputs-card">
      <input type="text" id="input-bill" />
      <label htmlFor="#input-bill" className="input-bill__label">
        Bill
      </label>

      <p className="tip-select-label">Select tip %</p>
      <TipSelect />

      <input type="text" id="input-persons" />
      <label htmlFor="#input-persons" className="input-persons__label">
        Number Of People
      </label>
    </div>
  );
}
