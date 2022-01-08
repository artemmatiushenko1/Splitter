import React, { useContext } from 'react';
import Output from './Output';
import CalculatorContext from '../../store/calculator-context';
import './OutputCard.css';
import ResetButton from './ResetButton';

const OutputCard = (props) => {
  const { bill, persons, tip, tipPerPerson, totalPerPerson } =
    useContext(CalculatorContext);

  return (
    <div className="output-card">
      <Output title="Tip amount" value={tipPerPerson} />
      <Output title="Total" value={totalPerPerson} />
      <ResetButton
        onClick={props.onReset}
        disabled={bill || persons || tip ? false : true}
      />
    </div>
  );
};

export default OutputCard;
