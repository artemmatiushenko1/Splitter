import React, { useContext } from 'react';
import CalculatorContext from '../store/calculator-context';
import '../styles/ComputedCard.css';

const isValid = (...values) => {
  for (const value of values) {
    if (!value) {
      return false;
    }
  }
  return true;
};

const ComputedCard = (props) => {
  const { bill, persons, tip } = useContext(CalculatorContext);

  //TODO: try to move all of the calculating logic into Calculator.jsx
  const getTotal = (bill, persons) => {
    return isValid(bill, persons)
      ? bill / persons + getTip(bill, persons, tip)
      : 0;
  };

  const getTip = (bill, persons, tip) => {
    return isValid(persons, bill, tip) ? (bill * tip) / 100 / persons : 0;
  };

  return (
    <div className="computed-card">
      <div className="amount tip-amount">
        <h2 className="amount__name">
          Tip Amount <br />
          <span className="amount__per-label">/ person</span>
        </h2>
        <output className="amount__value">
          ${getTip(bill, persons, tip).toFixed(2)}
        </output>
      </div>
      <div className="amount total-amount">
        <h2 className="amount__name">
          Total <br />
          <span className="amount__per-label">/ person</span>
        </h2>
        <output className="amount__value">
          ${getTotal(bill, persons, tip).toFixed(2)}
        </output>
      </div>
      <button
        type="reset"
        className="btn-reset"
        disabled={bill || persons || tip ? false : true}
      >
        Reset
      </button>
    </div>
  );
};

export default ComputedCard;
