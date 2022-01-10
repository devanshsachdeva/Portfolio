import React from 'react'
import Home from './Home'
import Footer from './Footer/Footer'
import "./HomeFooter.css";
import NavigationBar from '../../Components/NavigationBar'
import AboutMe from '../AboutMe/AboutMe';

export default function HomeFooter() {
    return (
        <div className='home-container'>
            <NavigationBar/>
            <Home/> 
            <Footer/>    
        </div>
    )
}
