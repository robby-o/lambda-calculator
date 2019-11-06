import React, { useState } from 'react';
import './App.css';

import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';

import { numbers } from './data';
import { specials } from './data';
import { operators } from './data';

function App() {
  const [displayState, setDisplayState] = useState(0);
  const [numberState] = useState(numbers);
  const [specialState] = useState(specials);
  const [operatorState] = useState(operators);

  const updateDisplay = x => {
    let display = displayState;

    // prevents number overflow
    if (display.length > 9) {
      return displayState;
    }

    // removes leading zero
    if (displayState === 0) {
      display = x;

      // prepends a '-' to display
    } else if (x === '+/-') {
      x = '-';
      display = x + display;
    } else {
      display += x;
    }

    // enables 'Clear' button
    if (x === 'C') {
      display = 0;
    }

    // evaluation
    if (x === '=') {
      function evalString(display) {
        return new Function('return ' + display)();
      }
      display = evalString(displayState);
    }
    console.log(display);
    setDisplayState(display);
  };

  return (
    <div className='container'>
      <Logo />
      <div className='App'>
        <Display displayValue={displayState} />
        <div className='buttons'>
          <div className='left'>
            <Specials updateDisplay={updateDisplay} special={specialState} />
            <Numbers updateDisplay={updateDisplay} number={numberState} />
          </div>
          <div className='right'>
            <Operators updateDisplay={updateDisplay} operator={operatorState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
