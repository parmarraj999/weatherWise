import React, { useContext } from 'react'
import './header.css'
import { CelciusUnit } from '../../../context/context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface Props {
    mainNavigation: string,
}

const Header: React.FC<Props> = (props) => {

    const { mainNavigation } = props;
    const { celcius, setCelcius, setSidebar } = useContext(CelciusUnit)

    const tl = gsap.timeline();

    const changeFarenheit = () => {
        tl.to(".circle-anime-f", {
            width: "3000px",
            height: "3000px",
            duration: .8
        })
        tl.to(".circle-anime-f", {
            width: "0px",
            height: "0px",
            duration: .8
        })
        setTimeout(() => {
            setCelcius("farenheit")
        }, 600);
    }
    const changeCelcius = () => {
        tl.to(".circle-anime-c", {
            width: "3000px",
            height: "3000px",
            duration: .8
        })
        tl.to(".circle-anime-c", {
            width: "0px",
            height: "0px",
            duration: .8
        })
        setTimeout(() => {
            setCelcius("celcius")
        }, 600);
    }

    const closeSideBar = () => {
        setSidebar("flex")
    }

    return (
        <div className='main-header' >
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                {/* <h2 style={mainNavigation === "today" ? { color: "black" } : {}} >Today</h2> */}
                <h2>Week</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }} >
            <div className='close-sidebar close-btn' style={{ marginLeft: '10px' }} onClick={closeSideBar}>
                    <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V19H19V5H12ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
                </div>
                <div style={celcius === "celcius" ? { background: "black", color: 'white' } : {}} className='degree-btn' onClick={changeCelcius}>°C
                    <div className='circle-anime-c' ></div>
                </div>
                <div style={celcius === "farenheit" ? { background: "black", color: 'white' } : {}} className='degree-btn' onClick={changeFarenheit}>°F
                    <div className='circle-anime-f' ></div>
                </div>
            </div>
        </div>
    )
}

export default Header