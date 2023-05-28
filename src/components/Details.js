import React from 'react';
import { useSelector } from 'react-redux';

function Details() {

  const details=useSelector((state)=>state.type.detailsData)

  return (
    <div id="details">
        <div className='details-item'>
            <div>Words:</div>
            <div>{details.words}</div>
        </div>
        <div className='details-item'>
            <div>characters</div>
            <div>{details.characters}</div>
        </div>
        <div className='details-item'>
            <div>Mistakes:</div>
            <div>{details.mistakes}</div>
        </div>
    </div>
  )
}

export default Details