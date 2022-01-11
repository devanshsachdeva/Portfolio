import React from 'react'
import Home from './Home'
import "./HomeFooter.css";
import NavigationBar from '../../Components/NavigationBar'
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';

export default function HomeFooter() {
    return (
        <div className='home-container'>
            <NavigationBar />
            <Home />
            <AboutMe />
            <Contact />
        </div>
    )
}
