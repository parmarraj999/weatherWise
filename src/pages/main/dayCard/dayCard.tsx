import React, { useContext } from 'react'
import './dayCard.css'
import { CelciusUnit, WeatherData } from '../../../context/context'

function DayCard() {

    const { forecastData } = useContext(WeatherData)
    const data = forecastData.forecastday;

    // celcius and farenheit data 

    const { celcius } = useContext(CelciusUnit)

    // get image according to code

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

    const image = (code: number) => {

        if (sunny.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/sunny.png' />
        }
        if (partlyCloud.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/partlyCloud.png' />
        }
        if (cloud.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/cloud.png' />
        }
        if (rain.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/rain.png' />
        }
        if (snow.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/snow.png' />
        }
        if (fog.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/fog.png' />
        }
        if (thunder.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/thunder.png' />
        }
        if (heavySnow.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/heavySnow.png' />
        }
        if (heavySleet.includes(code)) {
            return <img style={{ width: "60px" }} src='../../../image/heavySleet.png' />
        }
    }

    // convert date into day 

    function findDayOfTheWeek(date: string) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        const dayIndex = new Date(date).getDay();
        return daysOfWeek[dayIndex];

    }
    const getDay = (date: string) => {
        const day = findDayOfTheWeek(`${date}`)
        return day;
    }

    // main tsx code 

    return (
        <div className='daycard-container' >
            {
                data?.map((data: any) => {
                    return (
                        <div className='daycard' >
                            <h1>{getDay(data?.date)}</h1>
                            <div className='daycard-img' >{image(data?.day?.condition?.code)}</div>
                            <div>
                                {
                                    celcius === "farenheit" ?
                                    <h3>{data?.day?.avgtemp_f}°F</h3>
                                    :
                                    <h3>{data?.day?.avgtemp_c}°C</h3>
                                }
                                {/* <h3>{data?.day?.avgtemp_c}°C</h3> */}
                                <h4></h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DayCard