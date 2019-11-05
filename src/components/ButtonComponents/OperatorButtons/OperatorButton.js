import React from 'react';

const OperatorButton = props => {
  return (
    <>
      <button
        className='operator_button button'
        onClick={() => props.updateDisplay(props.button.value)}
      >
        <span role='img' aria-label='operator'>
          {props.button.value}
        </span>
      </button>
    </>
  );
};

export default OperatorButton;
