import { expect } from 'chai';
import Calculations from './Calculations';

describe('Calculations', () => {
  it('should be able to evaluate strings and return a number', () => {
    const calculate = new Calculations();
    let currentString = '8+1';
    let result = calculate.evaluate(currentString);
    expect(result).to.equal(9);
    currentString = '7+8';
    result = calculate.evaluate(currentString);
    expect(result).to.equal(15);
  });
  it('should be able to calculate exponents and powers', () => {
    const calculate = new Calculations();
    let currentString = '7+8';
    let result = calculate.evaluate(currentString);
    expect(result).to.equal(15);
    currentString = '7+8^3';
    result = calculate.evaluate(currentString);
    expect(Math.round(result)).to.equal(519);
  });
  it('should be able to get the root value of a number', () => {
    const calculate = new Calculations();
    const currentString = '7+8sqrt(8)^2';
    const result = calculate.evaluate(currentString);
    expect(Math.round(result)).to.equal(71);
  });
});
