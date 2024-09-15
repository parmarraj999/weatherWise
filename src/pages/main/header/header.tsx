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
    const { celcius, setCelcius } = useContext(CelciusUnit)

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

    return (
        <div className='main-header' >
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <h2 style={mainNavigation === "today" ? { color: "black" } : {}} >Today</h2>
                <h2 style={mainNavigation === "week" ? { color: "black", borderBottom: "2px solid black" } : {}} >Week</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }} >
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