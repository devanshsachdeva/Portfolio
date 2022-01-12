import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import CompProjects from '../../Components/CompProject/CompProjects'
import FooterLayout from '../FooterLayout/FooterLayout'
import './Projects.css'

export default function Projects() {
    return (
        <div className='prj-parent-container'>
            <NavigationBar />
            <div className='prj-title'>
                <h1>
                    Projects
                </h1>
                <h6>
                    A Brief on what projects i have worked upon, single handedly !!
                </h6>
            </div>
            <div className='prj-container'>

                <CompProjects desc="line 1 line 1 line 1line 1<br/> line 2 line 2 line 2" title="Title 1 here" time="1" />

                <CompProjects desc="line 1 line 1 line 1line 1<br/> line 2 line 2 line 2" title="Title 2 here" time="1" />


            </div>
            <div className='prj-container'>

                <CompProjects desc="line 1 line 1 line 1line 1<br/> line 2 line 2 line 2" title="Title 1 here" time="1" />

                <CompProjects desc="line 1 line 1 line 1line 1<br/> line 2 line 2 line 2" title="Title 2 here" time="1" />


            </div>
            <div className='prj-container'>

                <CompProjects desc="line 1 line 1 line 1line 1<br/> line 2 line 2 line 2" title="Title 1 here" time="1" />

            </div>
            <FooterLayout />
        </div>
    )
}
