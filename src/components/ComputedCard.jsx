import React from 'react';
import '../styles/ComputedCard.css';

export default function ComputedCard(props) {
  const { bill, persons, tip } = props;

  const getTotal = (bill, persons) => {
    return persons !== 0 && !isNaN(persons) && bill !== 0 && !isNaN(bill)
      ? bill / persons
      : 0;
  };

  const getTip = (bill, persons, tip) => {
    return persons !== 0 && !isNaN(persons) && bill !== 0 && !isNaN(bill)
      ? (bill * tip) / 100 / persons
      : 0;
  };

  return (
    <div className="computed-card">
      <div className="amount tip-amount">
        <h3 className="amount__name">Tip Amount</h3>
        <p className="amount__per-label">/ person</p>
        <h2 className="amount__value">
          ${getTip(bill, persons, tip).toFixed(2)}
        </h2>
      </div>

      <div className="amount total-amount">
        <h3 className="amount__name">Total</h3>
        <p className="amount__per-label">/ person</p>
        <h2 className="amount__value">${getTotal(bill, persons).toFixed(2)}</h2>
      </div>

      <button className="btn-reset">Reset</button>
    </div>
  );
}
