import React, { useState } from 'react';
import NumberButton from './NumberButton';

const Numbers = props => {
  return (
    <div className='numbers'>
      {props.number.map((number, index) => (
        <NumberButton key={index} button={number} />
      ))}
    </div>
  );
};

export default Numbers;
