import calculate from '../calculate';

describe('calculate', () => {
  const CALCULATOR = {
    total: null,
    next: null,
    operation: null,
  };

  it('should assign a number in next', () => {
    const RESULT = calculate(CALCULATOR, '5');
    expect(RESULT.next).toBe('5');
  });

  it('should assign another digit to next number', () => {
    let RESULT = calculate(CALCULATOR, '5');
    RESULT = calculate(RESULT, '6');
    expect(RESULT.next).toBe('56');
  });

  it('should assign operator to operation', () => {
    let RESULT = calculate(CALCULATOR, '1');
    RESULT = calculate(CALCULATOR, '+');
    expect(RESULT.operation).toBe('+');
  });

  it('should assign total', () => {
    let RESULT = calculate(CALCULATOR, '7');
    RESULT = calculate(RESULT, '+');
    RESULT = calculate(RESULT, '6');
    RESULT = calculate(RESULT, '=');
    expect(RESULT.total).toBe('13');
  });

  it('should reset calculator', () => {
    let RESULT = calculate(CALCULATOR, '8');
    RESULT = calculate(RESULT, 'AC');
    expect(RESULT).toStrictEqual(CALCULATOR);
  });
});
