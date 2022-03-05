import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

export const Navigation = () => {
  return (
    <div className='nav-div'>
      <Link to="/" name="Home">Home</Link>
      <Link to="/Units" name="Units">Units</Link>
    </div>
  )
}
