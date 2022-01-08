import { useEffect, useReducer } from 'react';
import './Calculator.css';
import OutputCard from '../OutputCard/OutputCard';
import SplitForm from '../SplitForm/SplitForm';
import CalculatorContext from '../../store/calculator-context';
import calculatorReducer, {
  initialState,
} from '../../reducers/calculator-reducer';

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  useEffect(() => {
    const debounceTimerId = setTimeout(() => {
      dispatch({ type: 'CALCULATE' });
    }, 200);

    return () => {
      clearTimeout(debounceTimerId);
    };
  }, [state.bill, state.tip, state.persons]);

  const onBillChangeHandler = (e) => {
    dispatch({ type: 'BILL_INPUT', value: e.target.value });
  };

  const onTipChangeHandler = (tipValue) => {
    dispatch({ type: 'TIP_INPUT', value: tipValue });
  };

  const onPersonsChangeHandler = (e) => {
    dispatch({ type: 'PERSONS_INPUT', value: e.target.value });
  };

  const onFormResetHandler = () => {
    dispatch({ type: 'RESET' });
  };

  const providedValues = {
    bill: state.bill,
    tip: state.tip,
    persons: state.persons,
    isPersonsValid: state.isPersonsValid,
    tipPerPerson: state.tipPerPerson,
    totalPerPerson: state.totalPerPerson,
  };

  return (
    <CalculatorContext.Provider value={providedValues}>
      <main className="calculator">
        <SplitForm
          onBillInput={onBillChangeHandler}
          onTipInput={onTipChangeHandler}
          onPersonsInput={onPersonsChangeHandler}
        />
        <OutputCard onReset={onFormResetHandler} />
      </main>
    </CalculatorContext.Provider>
  );
};

export default Calculator;
