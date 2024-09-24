import React, { useEffect, useState } from 'react'
import './home.scss'
import slideVideo from '../../assets/videos/slider.webm';
import './home.js'
import ContactForm from '../contact/contactComps/ContactForm.jsx';
import HomeProjects from './homeComps/HomeProjects.jsx';
import HomeProducts from './homeComps/HomeProducts.jsx';
import Splash from '../../components/Splash.jsx'

const Home = () => {

  const playFromHome = () => {
    document.getElementById("playMusic").click();
  }
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Simulating loading time of 1 second.
  }, [])
  return (
    <>
      {
        !isLoaded && <Splash />
      }
      <div  onClick={() => playFromHome()} className='home_section_page'>
        <video autoPlay muted loop className='video_slider' playsInline preload="auto"  src={slideVideo} type="video/webm" />
        <div className="home_container_content">
          <h2 className='paragraph'>Where your ideas meet our innovative visual solutions</h2>
        </div>
      </div>
      <div className='home_container'>
        <HomeProjects />
        <HomeProducts />
      </div>
      <ContactForm />
    </>
  )
}

export default Home
