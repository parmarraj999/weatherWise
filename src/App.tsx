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
  const [img, setImg] = useState('sunny')

  const sunny = [1000]

    const partlyCloud = [1003]

    const cloud = [1006]

    const rain = [1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246]

    const snow = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1237, 1237, 1255, 1261, 1264]

    const heavySnow = [1222, 1225, 1258, 1282]

    const heavySleet = [1207, 1252, 1069]

    const fog = [1135, 1147, 1030]

    const thunder = [1087, 1273, 1276, 1279]

    const sleet = [1249, 1204]

  const fetchData = () => {
    const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8eb31ccd94344ddaa6675422241009&q=${searchValue}&days=1&aqi=no&alerts=no`)
      .then(result => {
        console.log("data fetched")
        setData(result.data)
        setCurrentData(result.data.current)
        setForecastData(result.data.forecast)

        if (sunny.includes(result.data.current.condition.code)) {
          setImg("sunny")
      }
      if (partlyCloud.includes(result.data.current.condition.code)) {
          setImg("partlyCloud")
      }
      if (cloud.includes(result.data.current.condition.code)) {
          setImg("cloud")
      }
      if (rain.includes(result.data.current.condition.code)) {
          setImg("rain")
      }
      if (snow.includes(result.data.current.condition.code)) {
          setImg("snow")
      }
      if (fog.includes(result.data.current.condition.code)) {
          setImg("fog")
      }
      if (thunder.includes(result.data.current.condition.code)) {
          setImg("thunder")
      }
      if (heavySnow.includes(result.data.current.condition.code)) {
          setImg("heavySnow")
      }
      if (heavySleet.includes(result.data.current.condition.code)) {
          setImg("heavySleet")
      }
  

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <WeatherData.Provider value={{data ,setData, currentData, setCurrentData, forecastData, setForecastData}}>
      <div className="App">
        <div className='right-main'>
          <Sidebar setSearchValue={setSearchValue} fetchData={fetchData} img={img}/>
        </div>
        <div className='left-main' >
          <Main />
        </div>
      </div>
    </WeatherData.Provider>
  );
}

export default App;