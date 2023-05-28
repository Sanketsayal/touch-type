import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { start,decreaseTime,setDetails } from '../Redux/TypeSlice';
import { useNavigate } from 'react-router-dom';

function Type() {

  let navigate=useNavigate();

  let type=useSelector((state)=>state.type);
  const dispatch=useDispatch();

  const handleKeyPress=(inputValue)=>{
    if(!type.timeStarted){
      startTimer();
    }
    dispatch(setDetails(testDetailsCalculator(type.selectedParagraph,inputValue)))
  }

  const testDetailsCalculator = (originalValue, typedValue) => {
    const words = typedValue.split(' ').length;
    const characters = typedValue.length;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return typedChar !== originalValue[index] ? acc+1 : acc 
    }, 0)

    return { words, characters, mistakes }
}

  const startTimer=()=>{
    dispatch(start());
    let time=type.timeRemaining
    const timer = setInterval(() => {
			if(time>0){
        dispatch(decreaseTime())
        time--;
      }else{
        clearInterval(timer)
        navigate('/results');
      }
		}, 1000)
  }

  return (
    <div id='type'>
        <div id='context'>
            <p>{type.selectedParagraph}</p>
        </div>
        <div id='user-input'>
            <textarea
              placeholder='Type Here..'
              onChange={e=>handleKeyPress(e.target.value)}
             />
        </div>
    </div>
  )
}

export default Type