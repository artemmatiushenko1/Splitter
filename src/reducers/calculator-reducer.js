export const initialState = {
  bill: '',
  tip: '',
  persons: '',
  isPersonsValid: null,
  tipPerPerson: '',
  totalPerPerson: '',
};

const calculate = (bill, persons, tip) => {
  const tipPerPerson = persons ? (bill * tip) / 100 / persons : 0;
  const totalPerPerson = persons ? bill / persons + tipPerPerson : 0;

  return {
    tipPerPerson,
    totalPerPerson,
  };
};

const calculatorReducer = (prevState, action) => {
  switch (action.type) {
    case 'BILL_INPUT':
      return {
        ...prevState,
        bill: action.value,
      };
    case 'TIP_INPUT':
      return {
        ...prevState,
        tip: action.value,
      };
    case 'PERSONS_INPUT':
      const persons = action.value;
      const isPersonsValid = persons === '0' ? false : true;
      return {
        ...prevState,
        persons,
        isPersonsValid,
      };
    case 'CALCULATE':
      const { tipPerPerson, totalPerPerson } = calculate(
        Number(prevState.bill),
        Number(prevState.persons),
        Number(prevState.tip)
      );
      return {
        ...prevState,
        tipPerPerson,
        totalPerPerson,
      };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
};

export default calculatorReducer;
