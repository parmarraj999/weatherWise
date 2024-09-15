import React, { useState } from 'react'
import './main.css'
import Header from './header/header'

function Main() {

  const [mainNavigation,setMainNavigation] = useState('week')

  return (
    <div className='main-container'>
      <Header mainNavigation={mainNavigation}/>
    </div>
  )
}

export default Main