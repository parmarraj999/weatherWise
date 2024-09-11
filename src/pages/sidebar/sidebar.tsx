import React, { ReactElement, useContext } from 'react'
import './sidebar.css'
import { WeatherData } from '../../context/context';

interface SidebarProps{
    setSearchValue: (value : string) => void,
    fetchData : ()=>void,
}

const Sidebar: React.FC<SidebarProps> = (props) =>{

    const {setSearchValue, fetchData} = props;
    const {data, setData, currentData} = useContext(WeatherData);

    const hanldeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const hanldeClose = ()=> {
        setSearchValue('');
        setData([]);
    }

    // image codes 
    const rain =[176,182,185,266,281,284,293,296,299,302,305,308,311,314,317,320,356,362,365,]
    const snow = [179,227,230,320,323,326,329,332,335,338,350,353,368,371,374,377]
    const fog = [248,260,143]
    const thunder = [200,386,389,392,395]


    return (
        <div className='sidebar-container'>
            <div className='input-container' >
                <div className='search-btn' onClick={fetchData} >
                <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                </div>
                <input placeholder='Search for Places...' onChange={(e)=>hanldeSearchValue(e)} />
                <div className='close-btn' onClick={hanldeClose} >
                <svg style={{width:'30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </div>
            </div>
            <div className='weather-image' >
                <img style={{width:'60%'}} src='//cdn.weatherapi.com/weather/64x64/day/116.png' />
            </div>
            <div className='weather-container' >
                <h2>12<span>°C</span></h2>
                <h3>Monday, <span>16:00</span></h3>
            </div>
            <div className='cloud-container' >
                <h4>{currentData?.condition?.text}</h4>
                <h4>Rain - 30%</h4>
            </div>
            <div className='city-container' >
                <div className='image-background' >
                    <h1>{data?.location?.name},{data?.location?.region}</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar