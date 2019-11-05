import React from 'react';
import SpecialButton from './SpecialButton';

const Specials = props => {
  return (
    <div className='specials'>
      {props.special.map((special, index) => (
        <SpecialButton
          updateDisplay={props.updateDisplay}
          key={index}
          button={special}
        />
      ))}
    </div>
  );
};

export default Specials;
