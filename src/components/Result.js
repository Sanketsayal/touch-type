import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../Redux/TypeSlice'


function Result() {

  const initial={
    timeStarted:false,
    timeRemaining: 60,
    detailsData: {
      words: 0,
      characters: 0,
      mistakes: 0,
    },
    selectedParagraph: ''
  }

    const navigate=useNavigate()

    const details=useSelector((state)=>state.type.detailsData);
    const dispatch=useDispatch();

    const navigateToHome=()=>{
      dispatch(reset(initial));
      navigate('/')
    }

  return (
    <div id='result'>
        <h1>Test Results</h1>

        <div className="result-container">
            <p><b>Characters:</b> {details.characters}</p>
            <p><b>Mistakes:</b> {details.mistakes}</p>
            <p><b>Speed:</b> {details.words} wpm</p>
        </div>
        <button onClick={navigateToHome} className="start-again-btn">
          Start Again
        </button>

    </div>
  )
}

export default Result