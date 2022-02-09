import React, { useState } from 'react';
import nestedTernary from '../logic/helper';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleChange = (event) => {
    const { next, total, operation } = calculate(state, event.target.textContent);
    setState({ next, total, operation });
  };

  const info = state;
  const operators = '÷x-+=';
  let digits = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  digits = digits.map((digit) => (
    <button
      type="button"
      onClick={handleChange}
      key={digit}
      id={operators.includes(digit) ? 'operators' : nestedTernary('0'.includes(digit), 'zero', null)}
    >
      {digit}
    </button>
  ));

  return (
    <div className="calculator">
      <p className="output">{info.next ? info.next : nestedTernary(!info.total, 0, info.total)}</p>
      {digits}
    </div>
  );
};

export default Calculator;
