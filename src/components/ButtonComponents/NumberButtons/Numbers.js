import React from 'react';
import NumberButton from './NumberButton';

const Numbers = props => {
  return (
    <div className='numbers'>
      {props.number.map((number, index) => (
        <NumberButton
          updateDisplay={props.updateDisplay}
          key={index}
          button={number}
        />
      ))}
    </div>
  );
};

export default Numbers;
