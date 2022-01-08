const initialState = {
  bill: '',
  tip: '',
  persons: '',
  isPersonsValid: null,
  tipPerPerson: '',
  totalPerPerson: '',
};

const calculate = (bill, persons, tip) => {
  let calculatedTip;
  let calculatedTotal;
  if ((!tip && !persons) || !persons) {
    calculatedTip = '';
    calculatedTotal = '';
  }
  calculatedTip = (bill * tip) / 100 / persons;
  calculatedTotal = bill / persons + calculatedTip;

  return {
    calculatedTip,
    calculatedTotal,
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
      const isPersonsValid = action.value === '0' ? false : true;
      return {
        ...prevState,
        persons: action.value,
        isPersonsValid,
      };
    case 'CALCULATE':
      const { tipPerPerson, totalPerPerson } = calculate(
        prevState.bill,
        prevState.persons,
        prevState.tip
      );
      return {
        ...prevState,
        tipPerPerson,
        totalPerPerson,
      };

    default:
      return 0;
  }
};

export default calculatorReducer;
