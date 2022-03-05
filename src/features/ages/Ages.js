import React from 'react';
import { useDispatch } from 'react-redux';
import { sagaActions } from '../../saga/sagaActions';
import './Ages.scss'

export const Ages = () => {
  const dispatch = useDispatch();

  return (
    <div className='ages-div'>
      <h1>Ages</h1>
      <div className='button-div'>
        <button type='button' name="All" onClick={() => dispatch({ type: sagaActions.RESET_AGE })}>All</button>
        <button type='button' name="Dark" onClick={(e) => dispatch({ type: sagaActions.SET_AGE, value: e.target.name})}>Dark</button>
        <button type='button' name="Feudal" onClick={(e) => dispatch({ type: sagaActions.SET_AGE, value: e.target.name})}>Feudal</button>
        <button type='button' name="Castle" onClick={(e) => dispatch({ type: sagaActions.SET_AGE, value: e.target.name})}>Castle</button>
        <button type='button' name="Imperial" onClick={(e) => dispatch({ type: sagaActions.SET_AGE, value: e.target.name})}>Imperial</button>
      </div>
    </div>
  )
}
