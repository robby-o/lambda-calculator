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
    if (displayState === 0) {
      display = x;
    } else {
      display += x;
    }
    console.log(display);
    setDisplayState(display);
  };

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

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
