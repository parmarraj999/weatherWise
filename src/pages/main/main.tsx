import React, { useState } from 'react'
import './main.css'
import Header from './header/header'
import DayCard from './dayCard/dayCard'
import TodayCard from './todayCard/todayCard'

function Main() {

  const [mainNavigation,setMainNavigation] = useState('week')

  return (
    <div className='main-container'>
      <Header mainNavigation={mainNavigation}/>
      <DayCard/>
      <div className='today-card-wrapper' >
        <h3>Today's Highlights</h3>
        <TodayCard/>
      </div>
    </div>
  )
}

export default Main