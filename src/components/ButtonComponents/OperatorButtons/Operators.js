import React, { useState } from 'react';
import OperatorButton from './OperatorButton';

const Operators = props => {
  return (
    <div className='operators'>
      {props.operator.map((operator, index) => (
        <OperatorButton key={index} button={operator} />
      ))}
    </div>
  );
};

export default Operators;
