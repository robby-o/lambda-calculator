import React from 'react';

const SpecialButton = props => {
  return (
    <>
      <button
        className='special_button button'
        onClick={() => props.updateDisplay(props.button)}
      >
        <span role='img' aria-label='special'>
          {props.button}
        </span>
      </button>
    </>
  );
};

export default SpecialButton;
