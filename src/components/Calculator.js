import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <p className="output">0</p>
        <button id="AC" type="button">AC</button>
        <button id="+/-" type="button">+/-</button>
        <button id="%" type="button">%</button>
        <button id="operators" type="button">÷</button>
        <button id="7" type="button">7</button>
        <button id="8" type="button">8</button>
        <button id="9" type="button">9</button>
        <button id="operators" type="button">x</button>
        <button id="4" type="button">4</button>
        <button id="5" type="button">5</button>
        <button id="6" type="button">6</button>
        <button id="operators" type="button">-</button>
        <button id="1" type="button">1</button>
        <button id="2" type="button">2</button>
        <button id="3" type="button">3</button>
        <button id="operators" type="button">+</button>
        <button className="zero" type="button">0</button>
        <button id="." type="button">.</button>
        <button id="operators" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
