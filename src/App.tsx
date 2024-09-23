import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './pages/sidebar/sidebar';
import Main from './pages/main/main';
import axios from 'axios';
import { CelciusUnit, WeatherData } from './context/context';
import { useGeolocated } from "react-geolocated";
import Loader from './component/loader/loader';

function App() {

  const [searchValue, setSearchValue] = useState<string>('');

  const [sidebar, setSidebar] = useState<string>("flex")

  const [data, setData] = useState<any>([])
  const [showLoader, setShowLoader] = useState<string>('h')
  const [currentData, setCurrentData] = useState<any>([]);
  const [forecastData, setForecastData] = useState<any>([]);

  // const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [position, setPosition] = useState<{ latitude: number; longitude: number } | null>();

  const [img, setImg] = useState('noImage')
  const [cityImg, setCityImg] = useState<string>('')

  const [celcius, setCelcius] = useState("celcius")

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

  const unsplashApiKey = '1tUsYVORh4cahAsaRjqZp2STtiEyySjyFWkbAKt5uUY';
  const unsplashBaseUrl = 'https://api.unsplash.com/';

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    })
  }, []);

  useEffect(() => {
    if (position) {
      const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8eb31ccd94344ddaa6675422241009&q=${position.latitude},${position.longitude}&days=7&aqi=no&alerts=no`)
        .then(result => {
          console.log("data fetched")
          setData(result.data)
          setCurrentData(result.data.current)
          setForecastData(result.data.forecast)
          setShowLoader("hide")

          console.log(result.data)

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
          const value = result?.data?.location?.name + "," + result?.data?.location?.country
          getPhotos(value, 1, 1);

        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [position])


  const fetchData = () => {
    if (searchValue) {
      const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8eb31ccd94344ddaa6675422241009&q=${searchValue}&days=7&aqi=no&alerts=no`)
        .then(result => {
          console.log("data fetched")
          setData(result.data)
          setCurrentData(result.data.current)
          setForecastData(result.data.forecast)
          setShowLoader('hide')

          console.log(result.data)

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
          const value = result?.data?.location?.name + "," + result?.data?.location?.country
          getPhotos(value, 1, 1);

        })
        .catch(error => {
          console.log(error)
        })
    } else {
      if (!searchValue) {
        const response = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8eb31ccd94344ddaa6675422241009&q=${position?.latitude},${position?.longitude}&days=7&aqi=no&alerts=no`)
          .then(result => {
            console.log("data fetched")
            setData(result.data)
            setCurrentData(result.data.current)
            setForecastData(result.data.forecast)

            console.log(result.data)

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
            const value = result?.data?.location?.name + "," + result?.data?.location?.country
            getPhotos(value, 1, 1);

          })
          .catch(error => {
            console.log(error)
          })

      } else {
        console.log("data not found")
      }
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const getPhotos = async (query: string, page: number, perPage: number) => {
    try {
      const response = await axios.get(`${unsplashBaseUrl}/search/photos`, {
        params: {
          query,
          page,
          perPage,
          client_id: unsplashApiKey,
        },
      })
      setCityImg(response.data.results[0].links.download)
      // setCityImg(response.data.results[0].links.donwload)
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };

  return (

    <>
      {
        showLoader === "show" ?
          <Loader/> :  
      <WeatherData.Provider value={{ data, setData, currentData, setCurrentData, forecastData, setForecastData }}>
            <CelciusUnit.Provider value={{ celcius, setCelcius, sidebar, setSidebar }} >
              <div className="App">
                <div className='right-main' style={{ display: `${sidebar}` }}>
                  <Sidebar cityImg={cityImg} setSearchValue={setSearchValue} searchValue={searchValue} fetchData={fetchData} img={img} setCityImg={setCityImg} />
                </div>
                <div className='left-main' >
                  <Main />
                </div>
              </div>
            </CelciusUnit.Provider>
          </WeatherData.Provider>

}
    </>
  );
}

export default App;