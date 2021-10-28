import React from 'react';
import '../styles/ComputedCard.css';

export default function ComputedCard() {
  return (
    <div className="computed-card">
      <div className="amount tip-amount">
        <h3 className="amount__name">Tip Amount</h3>
        <p className="amount__per-label">/ person</p>
        <h2 className="amount__value">$0.00</h2>
      </div>

      <div className="amount total-amount">
        <h3 className="amount__name">Tip Amount</h3>
        <p className="amount__per-label">/ person</p>
        <h2 className="amount__value">$0.00</h2>
      </div>

      <button className="btn-reset">Reset</button>
    </div>
  );
}
