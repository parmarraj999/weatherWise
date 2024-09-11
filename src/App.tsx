import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './pages/sidebar/sidebar';
import Main from './pages/main/main';
import axios from 'axios';
import { WeatherData } from './context/context';

function App() {

  const [searchValue, setSearchValue] = useState<string>('');
  const [data,setData] = useState<any>([])
  const [currentData,setCurrentData] = useState<any>([]);
  const [forecastData,setForecastData] = useState<any>([]);

  const fetchData = () => {
    const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8eb31ccd94344ddaa6675422241009&q=${searchValue}&days=1&aqi=no&alerts=no`)
      .then(result => {
        console.log("data fetched")
        setData(result.data)
        setCurrentData(result.data.current)
        setForecastData(result.data.forecast)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <WeatherData.Provider value={{data ,setData, currentData, setCurrentData, forecastData, setForecastData}}>
      <div className="App">
        <div className='right-main'>
          <Sidebar setSearchValue={setSearchValue} fetchData={fetchData} />
        </div>
        <div className='left-main' >
          <Main />
        </div>
      </div>
    </WeatherData.Provider>
  );
}

export default App;