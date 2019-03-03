import math from 'mathjs';

class Calculations {
  constructor() {
    this.currentValue = '';
    this.result = 0;
    this.allowedKeyPress = false;
  }

  evaluate(currentValue) {
    try {
      this.currentValue = currentValue;
      if (
        (this.currentValue.length > 0 &&
          typeof this.currentValue === 'string' &&
          !Number.isNaN(Number(currentValue[currentValue.length - 1]))) ||
        currentValue[currentValue.length - 1] === ')'
      ) {
        this.result = math.eval(this.currentValue);
      } else {
        this.result = 'NaN';
      }
      return this.result;
    } catch (error) {
      throw error;
    }
  }

  get verifyInput() {
    return this.allowedKeyPress;
  }

  set verifyInput(value) {
    const allowedKeyPresses = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      '-',
      '*',
      '/',
      '(',
      ')',
      '.',
      'Dead',
      'Enter',
      'Backspace',
      'Delete',
    ];
    const allowedKeyPress = allowedKeyPresses.filter(key => key === value);
    if (allowedKeyPress.length > 0) {
      this.allowedKeyPress = true;
    } else {
      this.allowedKeyPress = false;
    }
  }
}

export default Calculations;
