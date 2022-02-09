import React from 'react';
import nestedTernary from '../logic/helper';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#f7ab6e';
    /* The code reviewer told me to add a lifecycle method,
    I wasn't sure what I should add since the functionality is working, so I added a style */
  }

  handleChange(event) {
    const { next, total, operation } = calculate(this.state, event.target.textContent);
    this.setState({ next, total, operation });
  }

  render() {
    const info = this.state;
    const operators = '÷x-+=';
    let digits = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    digits = digits.map((digit) => (
      <button
        type="button"
        onClick={this.handleChange}
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
  }
}

export default Calculator;
