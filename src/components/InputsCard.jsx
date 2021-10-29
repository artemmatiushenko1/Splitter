import React from 'react';
import TipSelect from './TipSelect';
import '../styles/InputsCard.css';

export default function InputsCard(props) {
  const { changeBill, changePersons, changeTip } = props;

  return (
    <div className="inputs-card">
      <div className="input-container">
        <label htmlFor="#input-bill" className="input-label">
          Bill
        </label>
        <input
          type="text"
          id="input-bill"
          className="input input-bill"
          onInput={(e) => {
            changeBill(e.target.value);
          }}
        />
      </div>

      <div className="input-container">
        <p className="input-label">Select tip %</p>
        <TipSelect changeTip={changeTip} />
      </div>

      <div className="input-container">
        <label htmlFor="#input-persons" className="input-label">
          Number Of People
        </label>
        <input
          type="text"
          id="input-persons"
          className="input input-persons"
          onInput={(e) => {
            changePersons(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
