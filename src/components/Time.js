import React from 'react';
import { useSelector } from 'react-redux';

function Time() {
  const type=useSelector((state)=>state.type);
  return (
    <div id='time'>Time Reamining: {type.timeRemaining} sec</div>
  )
}

export default Time