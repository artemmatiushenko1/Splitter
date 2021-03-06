import React, { useContext } from 'react';
import './OutputCard.css';
import Output from './Output';
import CalculatorContext from '../../store/calculator-context';
import ResetButton from './ResetButton';

const OutputCard = ({ onReset }) => {
  const { bill, persons, tip, tipPerPerson, totalPerPerson } =
    useContext(CalculatorContext);

  return (
    <div className="output-card">
      <Output title="Tip amount" value={tipPerPerson} />
      <Output title="Total" value={totalPerPerson} />
      <ResetButton
        onClick={onReset}
        disabled={bill || persons || tip ? false : true}
      />
    </div>
  );
};

export default OutputCard;
