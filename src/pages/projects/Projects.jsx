import React, { useEffect, useState } from 'react'
import './projects.css'
import ProjectsSlider from './projectsComps/ProjectsSlider'
import WhatWeDo from './projectsComps/WhatWeDo'
import OurServices from './projectsComps/OurServices'
import logo from '../../assets/icons/logo.png'
import Partners from './projectsComps/Partners'
import Refrences from './projectsComps/Refrences'
import slideVideo from '../../assets/videos/slider.webm';
import Splash from '../../components/Splash'
// import '../../../public/wave.js'
const Projects = () => {
  // useEffect(() => {
  //   initFluid()
  // })
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, [])

  return (
    <>
      {
        !isLoaded && <Splash />
      }
      <div className='home_section_page'>
        <video autoPlay muted loop playsInline preload="auto" className='video_slider' src={slideVideo} type="video/webm" />
        <div className="home_container_content">
          <h2 className='paragraph'>
          Bringing spaces to life with innovative visual solutions
          </h2>
        </div>
      </div>
      <div className='projects_page'>
        <OurServices />
        <h3 className='mt projects_center_text'>Your 360 Visual Display Solutions</h3>
        <WhatWeDo />
        <Partners />
        <Refrences />
      </div>
    </>
  )
}

export default Projects
