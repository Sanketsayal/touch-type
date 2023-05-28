import React, { useEffect } from 'react';
import {data} from './data';
import { setPara } from './Redux/TypeSlice';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {Header, Home, Result} from './components'


function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    const setParagraph=()=>{
      let  randomElement = data[Math.floor(Math.random() * data.length)]
      dispatch(setPara(randomElement));
    }
    setParagraph();
  },)

  return (
    
    <div id='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Result />} />
      </Routes> 

    </div>
  )
};

export default App;