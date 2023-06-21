import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, mulNumber, divNumber } from './Action'


function App() {
  const myState = useSelector((state) => state.changeNumber)
  const myOtherState = useSelector((state) => state.mulDivNumber)
  const dispatch = useDispatch();

  return (
    <>
    <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React & Redux</h4>
    </div>
      <div className='main'>
        <button id='decrement' onClick={() => dispatch(decNumber())}>-</button>
        <input id='input_field' type='text' value={myState}/>
        <button id='increment' onClick={() => dispatch(incNumber())}>+</button>
      </div>
      
      <br /><br /><br /><br /><br /><br />

      <div className='main'>
        <button id='decrement' onClick={() => dispatch(mulNumber())}>*</button>
        <input id='input_field' type='text' value={myOtherState}/>
        <button id='increment' onClick={() => dispatch(divNumber())}>/</button>
      </div>
    </>
  )
}

export default App
