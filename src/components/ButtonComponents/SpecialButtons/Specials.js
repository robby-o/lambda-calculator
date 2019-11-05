import React, { useState } from 'react';
import SpecialButton from './SpecialButton';

const Specials = props => {
  return (
    <div className='specials'>
      {props.special.map((special, index) => (
        <SpecialButton key={index} button={special} />
      ))}
    </div>
  );
};

export default Specials;
