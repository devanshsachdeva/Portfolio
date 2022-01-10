import React from 'react'
import Stacky from '../../Components/Stacky'
import Typical from 'react-typical';
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <div>
            <div>
                <h1>Stack I Use</h1>
            </div>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-picture-angular'>
                        <div className='profile-picture-background-angular'>

                        </div>

                    </div>
                    <div className='profile-picture-react'>
                        <div className='profile-picture-background-react'>

                        </div>

                    </div>
                    <div className='profile-picture-asp'>
                        <div className='profile-picture-background-asp'>

                        </div>

                    </div>


                </div>



            </div>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-picture-sql'>
                        <div className='profile-picture-background-sql'>

                        </div>

                    </div>
                    <div className='profile-picture-cpp'>
                        <div className='profile-picture-background-cpp'>

                        </div>

                    </div>
                    <div className='profile-picture-python'>
                        <div className='profile-picture-background-python'>

                        </div>

                    </div>


                </div>



            </div>
        </div>


    )
}
