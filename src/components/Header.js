import React from 'react'
import Buttons from './Buttons'

const Header = ({showform,changeTextandColor}) => {
  return (
    <header className='header'>
      <h1 className='app-header'>Task Manager App</h1>
      <Buttons onClick={showform} color={changeTextandColor ? 'red':'green'} text={changeTextandColor ? 'Close' : 'Add'}/>
           
    </header>
  )
}

export default Header