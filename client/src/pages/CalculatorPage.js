import React, { useState } from 'react';

const CalculatorPage = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [calculationHistory, setCalculationHistory] = useState([]);
  
  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      
      // Add to history
      const calculation = {
        id: Date.now(),
        expression: `${firstOperand} ${getOperatorSymbol(operator)} ${inputValue}`,
        result: result
      };
      setCalculationHistory(prevHistory => [calculation, ...prevHistory].slice(0, 5));
      
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const getOperatorSymbol = (op) => {
    switch(op) {
      case '+': return '+';
      case '-': return '−';
      case '*': return '×';
      case '/': return '÷';
      case '%': return '%';
      default: return op;
    }
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      case '%':
        return (firstOperand / 100) * secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <>
      <div className="card">
        <h1>Calculator</h1>
        <p>Use this calculator for quick and accurate calculations.</p>
        
        <div className="calculator-container">
          <div className="calculator">
            <div className="calculator-display">{display}</div>
            <div className="calculator-buttons">
              <button onClick={() => clear()} className="calc-button clear">AC</button>
              <button onClick={() => setDisplay(String(-1 * parseFloat(display)))} className="calc-button operator">+/-</button>
              <button onClick={() => performOperation('%')} className="calc-button operator">%</button>
              <button onClick={() => performOperation('/')} className="calc-button operator">÷</button>
              
              <button onClick={() => inputDigit('7')} className="calc-button">7</button>
              <button onClick={() => inputDigit('8')} className="calc-button">8</button>
              <button onClick={() => inputDigit('9')} className="calc-button">9</button>
              <button onClick={() => performOperation('*')} className="calc-button operator">×</button>
              
              <button onClick={() => inputDigit('4')} className="calc-button">4</button>
              <button onClick={() => inputDigit('5')} className="calc-button">5</button>
              <button onClick={() => inputDigit('6')} className="calc-button">6</button>
              <button onClick={() => performOperation('-')} className="calc-button operator">−</button>
              
              <button onClick={() => inputDigit('1')} className="calc-button">1</button>
              <button onClick={() => inputDigit('2')} className="calc-button">2</button>
              <button onClick={() => inputDigit('3')} className="calc-button">3</button>
              <button onClick={() => performOperation('+')} className="calc-button operator">+</button>
              
              <button onClick={() => inputDigit('0')} className="calc-button zero">0</button>
              <button onClick={() => inputDecimal()} className="calc-button">.</button>
              <button onClick={() => performOperation('=')} className="calc-button equals">=</button>
            </div>
          </div>
        </div>
      </div>
      
      {calculationHistory.length > 0 && (
        <div className="card">
          <h2>Calculation History</h2>
          <div className="calc-history">
            {calculationHistory.map(item => (
              <div key={item.id} className="calc-history-item">
                <div className="calc-expression">{item.expression}</div>
                <div className="calc-result">{item.result}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CalculatorPage;
