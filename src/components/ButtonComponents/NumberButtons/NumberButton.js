import React from 'react';

const NumberButton = props => {
  return (
    <>
      <button
        className='number_button button'
        onClick={() => props.updateDisplay(props.button)}
      >
        <span role='img' aria-label='number'>
          {props.button}
        </span>
      </button>
    </>
  );
};

export default NumberButton;
