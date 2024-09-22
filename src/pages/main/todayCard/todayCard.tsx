import React, { useContext } from 'react'
import './todayCard.css'
import { WeatherData } from '../../../context/context'

function TodayCard() {

    const { currentData, forecastData } = useContext(WeatherData)

    return (
        <div className='todaycard-container' >
            <div className='todayCard' >
                <h3>UV Index</h3>
                <div className='index-progress'>
                    <div style={{ width: `${currentData?.uv}0%` }}></div>
                </div>
                <h4 className='uv-number'>{currentData?.uv}</h4>
            </div>
            <div className='todayCard' >
                <h3>Wind Status</h3>
                <div className='wind-speed'>
                    <h4>{currentData?.wind_kph} <span>km/h</span></h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: "20px" }}>
                    <svg style={{ width: "30px",color:'#00c5fb' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z"></path></svg>
                    {currentData?.wind_dir}</div>
            </div>
            <div className='todayCard' >
                <h3>Sunrise & Sunset</h3>
                <div style={{width:"100%",height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:'.5rem'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
                        <svg style={{ width: "45px", color:'#00c5fb' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12V16H11V12H8L12 8L16 12H13Z"></path></svg>
                        <p style={{fontSize:"18px",fontWeight:500}}>{forecastData?.forecastday?.[0]?.astro?.sunrise}</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
                        <svg style={{ width: '45px',color:'#00c5fb' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z"></path></svg>
                        <p style={{fontSize:"18px",fontWeight:500}}>{forecastData?.forecastday?.[0]?.astro?.sunset}</p>
                    </div>
                </div>
            </div>
            <div className='todayCard' >
                <h3>Visibility</h3>
                <div className='wind-speed'>
                    <h4>{currentData?.vis_km} <span>km/h</span></h4>
                </div>
                <h4>Average</h4>
            </div>
            <div className='todayCard' >
                <h3>Humidity</h3>
                <div className='index-progress'>
                    <div style={{ width: `${currentData?.humidity}%`, display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:"24px",fontWeight:600 }}>{currentData?.humidity}%</div>
                </div>
                {/* <div className='wind-speed' >
                    <h4>{currentData?.humidity}%</h4>
                </div> */}
                <h4>Normal</h4>
            </div>
            <div className='todayCard' >
                <h3>Max & Min Temperature</h3>
                <div style={{height:"100%",width:'100%',display:'flex',gap:'.5rem',alignItems:'center'}}>
                    <div className='temp-meter'></div>
                     <div style={{width:'100%',height:'80%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <h2>{forecastData?.forecastday?.[0]?.day?.maxtemp_c}°C</h2>
                        <h2>{forecastData?.forecastday?.[0]?.day?.mintemp_c}°C</h2>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default TodayCard