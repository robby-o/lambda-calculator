import React from 'react';
import OperatorButton from './OperatorButton';

const Operators = props => {
  return (
    <div className='operators'>
      {props.operator.map((operator, index) => (
        <OperatorButton
          updateDisplay={props.updateDisplay}
          key={index}
          button={operator}
        />
      ))}
    </div>
  );
};

export default Operators;
