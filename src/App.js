import React, { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const handleButtonClick = (e) => {
    const buttonText = e.target.textContent.trim();
    switch (buttonText) {
      case 'AC':
        setOutput('');
        break;
      case '=':
        try {
          setOutput(eval(output));
        } catch (error) {
          setOutput('Error');
        }
        break;
      case 'DEL':
        setOutput(output.slice(0, -1));
        break;
      default:
        setOutput(output + buttonText);
        break;
    }
  };

  return (
    <div className="container">
      <div className="output">
        <input type="text" className="result" value={output} disabled />
      </div>
      {/* Buttons */}
      <div class="row">
            <button class="ac" onClick={handleButtonClick}>
                AC
            </button>
            <button class="delete" onClick={handleButtonClick}>
                DEL
            </button>
            <button class="divide" onClick={handleButtonClick}>
                /
            </button>
            <button class="percentage" onClick={handleButtonClick}>
                %
            </button>
        </div>
        <div class="row">
            <button class="seven"  onClick={handleButtonClick}>
                7
            </button>
            <button class="eight"  onClick={handleButtonClick}>
                8
            </button>
            <button class="nine"  onClick={handleButtonClick}>
                9
            </button>
            <button class="multiply"  onClick={handleButtonClick}>
                *
            </button>
        </div>
        <div class="row">
            <button class="four"  onClick={handleButtonClick}>
                4
            </button>
            <button class="five" onClick={handleButtonClick}>
                5
            </button>
            <button class="six" onClick={handleButtonClick}>
                6
            </button>
            <button class="minus" onClick={handleButtonClick}>
                -
            </button>
        </div>
        <div class="row">
            <button class="one" onClick={handleButtonClick}>
                1
            </button>
            <button class="two" onClick={handleButtonClick}>
                2
            </button>
            <button class="three" onClick={handleButtonClick}>
                3
            </button>
            <button class="plus" onClick={handleButtonClick}>
                +
            </button>
        </div>
        <div class="row">
            <button class="double-zero" onClick={handleButtonClick}>
                00
            </button>
            <button class="zero" onClick={handleButtonClick}>
                0
            </button>
            <button class="dot" onClick={handleButtonClick}>
                .
            </button>
            <button class="equal" onClick={handleButtonClick}>
                =
            </button>
        </div>
      {/* Other rows */}
      {/* Add JSX for other rows similarly */}
    </div>
  );
}

export default App;
