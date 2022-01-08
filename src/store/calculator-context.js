import React from 'react';

const CalculatorContext = React.createContext({
  bill: null,
  persons: null,
  tip: null,
  isPersonsValid: null,
  tipPerPerson: null,
  totalPerPerson: null,
});

export default CalculatorContext;
