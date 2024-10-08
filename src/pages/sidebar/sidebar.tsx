import React, { ReactElement, useContext, useEffect, useState } from 'react'
import './sidebar.css'
import { CelciusUnit, WeatherData } from '../../context/context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface SidebarProps {
    setSearchValue: (value: string) => void,
    fetchData: () => void,
    img: string,
    cityImg: string,
    searchValue: string,
    setCityImg: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {

    useGSAP(()=>{
        gsap.from(".ie",{
            y:-20,
            opacity:0,
            stagger: 0.3,
            duration:.2
        })
        gsap.from('.weather-image',{
            opacity:0,
            delay:.2
        })
        gsap.from(".weather-container",{
            x:-20,
            opacity:0,
            stagger: 0.3,
            duration:.2,
            delay:.8
        })
        gsap.from(".cloud-container",{
            x:-20,
            opacity:0,
            stagger: 0.3,
            duration:.2,
            delay:1
        })
        gsap.from(".city-container",{
            opacity:0,
            duration:.4,
            delay:1.2
        })
    })
 
    const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const day = new Date().getDay();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();

    const { searchValue, setSearchValue, fetchData, img, cityImg, setCityImg } = props;

    const { data, setData, currentData } = useContext(WeatherData);
    const { celcius, setSidebar } = useContext(CelciusUnit)

    // console.log(data)

    const hanldeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const hanldeClose = () => {
        setSearchValue("");
        setData(null);
        console.log('click')
    }

    const closeSideBar = () => {
        setSidebar("none")
    }

    return (
        <div className='sidebar-container'>
            <div className='input-container' >
                <div className='search-btn ie' onClick={fetchData} >
                    <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                </div>
                <input value={searchValue} placeholder='City Name' className='ie' onChange={(e) => hanldeSearchValue(e)} />
                <div className='close-btn ie' onClick={hanldeClose}>
                    <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </div>
                <div className='close-sidebar close-btn ie' style={{ marginLeft: '10px' }} onClick={closeSideBar}>
                    <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V19H19V5H12ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
                </div>
            </div>
            <div className='weather-image' >
                <img style={{ width: '60%' }} src={`../../../image/${img}.png`} />
            </div>
            <div className='weather-container' >
                {
                    celcius === "farenheit" ?
                        <>
                            <h2>{currentData?.temp_f}<span>°F</span></h2>
                            <h3>{dayName[day]}, <span>{hour}:{minute}</span></h3>
                        </>
                        :
                        <>
                            <h2>{currentData?.temp_c}<span>°C</span></h2>
                            <h3>{dayName[day]}, <span>{hour}:{minute}</span></h3>
                        </>
                }
            </div>
            <div className='cloud-container' >
                <h4 style={{ fontWeight: 600 }}>{currentData?.condition?.text}</h4>
                {
                    celcius === "farenheit" ?
                        <h4>Feels Like - <span style={{ color: "black", fontWeight: 600 }} >{currentData?.feelslike_f}°F</span></h4>
                        :
                        <h4>Feels Like - <span style={{ color: "black", fontWeight: 600 }} >{currentData?.feelslike_c}°C</span></h4>
                }
            </div>
            <div className='city-container' >
                <div className='image-background'>
                    <img src={`${cityImg}`} />
                </div>
                <h1>{data?.location?.name}, {data?.location?.country}</h1>
            </div>
        </div>
    )
}

export default Sidebar