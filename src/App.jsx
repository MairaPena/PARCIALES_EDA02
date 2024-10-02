import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [memory, setMemory] = useState(0); 

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  const memoryAdd = () => {
    setMemory(memory + result);
  };

  const memorySubtract = () => {
    setMemory(memory - result);
  };

  const memoryClear = () => {
    setMemory(0);
  };

  const memoryRecall = () => {
    setInput(memory.toString());
  };

  return (
    <div className="calculator">
      <h1>Calculadora con Memoria</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        {/* Primera fila: M+, M-, Mc, ÷ */}
        <button onClick={memoryAdd}>M+</button>
        <button onClick={memorySubtract}>M-</button>
        <button onClick={memoryClear}>Mc</button>
        <button onClick={() => handleClick("/")}>÷</button>

        {/* Segunda fila: 7, 8, 9, × */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        {/* Tercera fila: 4, 5, 6, − */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>−</button>

        {/* Cuarta fila: 1, 2, 3, + */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")} className="large-button">+</button>

        {/* Última fila: 0, ., C, = */}
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
