import React, { useEffect, useState } from 'react'
import './about.css'
import AboutInfo from './aboutComps/AboutInfo'
import AboutUsMore from './aboutComps/AboutUsMore'
import Team from '../../components/team/Team'
import '../home/home.scss'
import '../home/home.js'

// Members_in
import mimg1 from '../../assets/imgs/members_in/1.jpg'
import mimg2 from '../../assets/imgs/members_in/2.jpg'
import mimg3 from '../../assets/imgs/members_in/3.jpg'
import mimg4 from '../../assets/imgs/members_in/4.jpg'
import mimg5 from '../../assets/imgs/members_in/5.jpg'
import mimg6 from '../../assets/imgs/members_in/6.jpg'
import mimg7 from '../../assets/imgs/members_in/7.jpg'
import mimg8 from '../../assets/imgs/members_in/8.jpg'
import mimg9 from '../../assets/imgs/members_in/9.jpg'
import mimg10 from '../../assets/imgs/members_in/10.jpg'
import mimg11 from '../../assets/imgs/members_in/11.jpg'
import mimg12 from '../../assets/imgs/members_in/12.jpg'
import mimg13 from '../../assets/imgs/members_in/13.jpg'
import mimg14 from '../../assets/imgs/members_in/14.jpg'
import mimg15 from '../../assets/imgs/members_in/15.jpg'
import mimg16 from '../../assets/imgs/members_in/16.jpg'
import mimg17 from '../../assets/imgs/members_in/17.jpg'
import mimg18 from '../../assets/imgs/members_in/18.jpg'
import mimg19 from '../../assets/imgs/members_in/19.jpg'
import mimg20 from '../../assets/imgs/members_in/20.jpg'
import gd from '../../assets/imgs/members_in/gd.png'
import slideVideo from '../../assets/videos/slider.webm';
import Splash from '../../components/Splash.jsx'
import { motion } from 'framer-motion'
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Simulating loading time of 1 second.
  }, [])
  
  const [firstSlide, setFirstSlide] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFirstSlide(!firstSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, [firstSlide]);
  return (
    <>
      {
        !isLoaded && <Splash />
      }
      <div>
        <video autoPlay muted loop playsInline preload="auto"  className='video_slider' src={slideVideo} type="video/webm" />
        {
          firstSlide? (
            <div className="home_container_content slide_down_animation">
              <div>
                <h3 className='mt'>WHAT WE DO </h3>
                <h2 className='paragraph'>
                  We create immersive experiences by blending multimedia and interactivity to realize brand visions.
                </h2>
              </div>
            </div>
          ):(
            <div className="home_container_content slide_down_animation">
              <div>
                <h3 className='mt'>HOW WE DO IT </h3>
                <h2 className='paragraph'>
                  Our global artistic team excels in managing exceptional projects of any scope, scale, or location
                </h2>
              </div>
            </div>
          )
        }



      </div>
      <div className='about_main_container parent1'>
          {/* <AboutSlider img1={img1} img2={img2} img3={img3} img4={img4} /> */}
          <AboutInfo />
          <AboutUsMore />
          <Team 
            img1={mimg1} 
            img2={mimg2} 
            img3={mimg3} 
            img4={mimg4} 
            img5={mimg5}
            img6={mimg6} 
            img7={mimg7} 
            img8={mimg8} 
            img9={mimg9} 
            img10={mimg10}
            img11={mimg11}
            img12={mimg12}
            img13={mimg13}
            img14={mimg14}
            img15={mimg15}
            img16={mimg16}
            img17={mimg17}
            img18={mimg18}
            img19={mimg19}
            img20={mimg20}
            gd={gd}
          />
      </div>
    </>
  )
}

export default About
