import React from 'react';
import nestedTernary from '../logic/helper';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    const operators = '÷x-+=';
    let digits = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    digits = digits.map((digit) => (
      <button type="button" key={digit} id={operators.includes(digit) ? 'operators' : nestedTernary('0'.includes(digit), 'zero', null)}>
        {digit}
      </button>
    ));
    return (
      <div className="calculator">
        <p className="output">0</p>
        {digits}
      </div>
    );
  }
}

export default Calculator;
