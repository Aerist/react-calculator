/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

import Button from './Button';
import Calculations from './Calculations';
import './App.css';
import {
  AppContainer,
  CalculatorContainer,
  ButtonContainer,
  ResultContainer,
} from './styled-components/Containers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      calculateString: [],
      result: undefined,
    };
    this.handleCalculations = this.handleCalculations.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.checkKeyPress = React.createRef();
  }

  handleCalculations(event, value, keyPress) {
    const calculate = new Calculations();
    if (keyPress) {
      calculate.verifyInput = value;
    }
    if (!keyPress || calculate.verifyInput) {
      if (value === 'C' || value === 'Delete' || value === 'Escape') {
        this.setState({ calculateString: [], result: 0 });
      } else if (value === 'Backspace') {
        const { calculateString } = this.state;
        calculateString.pop();
        this.setState({ calculateString });
      } else if (value === '=' || value === 'Enter') {
        const { calculateString } = this.state;
        const evaluateResult = calculate.evaluate(calculateString.join(''));
        this.setState({
          result: evaluateResult,
          calculateString: [evaluateResult],
        });
      } else if (value === 'sqrt') {
        const { calculateString } = this.state;
        const sqrtValue = 'sqrt(';
        this.setState({
          calculateString: [...calculateString, sqrtValue],
          result: undefined,
        });
      } else if (event) {
        const { calculateString } = this.state;
        let addValue = value;
        if (value === 'Dead') {
          addValue = '^';
        }
        this.setState({
          calculateString: [...calculateString, addValue],
          result: undefined,
        });
      }
    }
  }

  handleClick(event, value) {
    try {
      this.handleCalculations(event, value);
    } catch (error) {
      this.setState(error);
    }
  }

  handleKeyPress(event) {
    try {
      this.handleCalculations(event, event.key, true);
    } catch (error) {
      this.setState(error);
    }
  }

  render() {
    const buttonValues = [
      { label: 'clear', value: 'C' },
      { label: '/', value: '/' },
      {
        label: (
          <span>
            x<sup>y</sup>
          </span>
        ),
        value: '^',
      },
      { label: '&#x221A', value: 'sqrt' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: 'x', value: '*' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '-', value: '-' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '+', value: '+' },
      { label: '0', value: '0' },
      { label: '.', value: '.' },
      { label: '(', value: '(' },
      { label: ')', value: ')' },
    ];

    const { result, calculateString } = this.state;
    const defaultString = calculateString.length > 0 ? calculateString : '0';
    const calculateButton = { label: '=', value: '=' };

    return (
      <AppContainer onKeyDown={e => this.handleKeyPress(e)} tabIndex={0}>
        <CalculatorContainer>
          <ResultContainer>
            {result !== undefined ? result : defaultString}
          </ResultContainer>
          <ButtonContainer>
            {buttonValues.map((button, index) => {
              return (
                <Button
                  key={button.label}
                  onClick={this.handleClick}
                  handleKeyPress={this.handleKeyPress}
                  label={button.label}
                  value={button.value}
                  index={index}
                />
              );
            })}
          </ButtonContainer>
          <Button
            onClick={this.handleClick}
            handleKeyPress={this.handleKeyPress}
            label={calculateButton.label}
            value={calculateButton.value}
            index={-1}
          />
        </CalculatorContainer>
      </AppContainer>
    );
  }
}

export default App;
