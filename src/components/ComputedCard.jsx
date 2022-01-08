import React, { useContext } from 'react';
import CalculatorContext from '../store/calculator-context';
import '../styles/ComputedCard.css';

const Output = (props) => {
  const value = Number(props.value).toFixed(2);
  return (
    <div className="amount tip-amount">
      <h2 className="amount__name">
        {props.title} <br />
        <span className="amount__per-label">/ person</span>
      </h2>
      <output className="amount__value">${value}</output>
    </div>
  );
};

const ComputedCard = (props) => {
  const { bill, persons, tip, tipPerPerson, totalPerPerson } =
    useContext(CalculatorContext);

  return (
    <div className="computed-card">
      <Output title="Tip amount" value={tipPerPerson} />
      <Output title="Total" value={totalPerPerson} />
      <button
        className="btn-reset"
        onClick={props.onReset}
        disabled={bill || persons || tip ? false : true}
      >
        Reset
      </button>
    </div>
  );
};

export default ComputedCard;
