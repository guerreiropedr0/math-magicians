import operate from '../operate';

describe('operate', () => {
  const OPERAND_ONE = 10;
  const OPERAND_TWO = 2;

  it('should perform an addition', () => {
    const RESULT = operate(OPERAND_ONE, OPERAND_TWO, '+');
    expect(RESULT).toBe('12');
  });

  it('should perform a subtraction', () => {
    const RESULT = operate(OPERAND_ONE, OPERAND_TWO, '-');
    expect(RESULT).toBe('8');
  });

  it('should perform a division', () => {
    const RESULT = operate(OPERAND_ONE, OPERAND_TWO, '÷');
    expect(RESULT).toBe('5');
  });

  it('should perform a multiplication', () => {
    const RESULT = operate(OPERAND_ONE, OPERAND_TWO, 'x');
    expect(RESULT).toBe('20');
  });
});
