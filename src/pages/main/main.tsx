import React, { useState } from 'react'
import './main.css'
import Header from './header/header'
import DayCard from './dayCard/dayCard'

function Main() {

  const [mainNavigation,setMainNavigation] = useState('week')

  return (
    <div className='main-container'>
      <Header mainNavigation={mainNavigation}/>
      <DayCard/>
    </div>
  )
}

export default Main