import { useEffect, useState } from 'react'
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import Footer from './components/Footer'
import Splash from './components/Splash'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import 'primeicons/primeicons.css';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx'
import ContactUs from './pages/contact/ContactUs.jsx'
import PrivacyPolicy from './pages/privacy/PrivacyPolicy.jsx'
import music from './assets/audio/bg.mp3'
import NotFound from './pages/notFound/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'


const song = new Audio(music);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])


  const playMusic = () => {
    if (!isPlaying) {
        song.play();
        song.loop = true
        setIsPlaying(true);
    }else{
        song.pause();
        setIsPlaying(false);
    }
  }
  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = '/wave.js' // path of the plugin called Slick Slider
  //   script.async = true // false not work too
  //   setTimeout(() => {
  //     document.body.append(script) // the element <script> is appended but no work
  //   }, 2000);
  // })

  return (
    <>

      <center>
        <div className='cursor_holder'>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color='193, 11, 111'
            outerAlpha={0.3}
            innerScale={1}
            outerScale={1}
          />
        </div>
        <BrowserRouter basename='/'>
        <ScrollToTop />
          {
            isLoading?(
              <Splash />
            ):null
          }
          <Header />

          <Routes>
            <Route exact path='/'  Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/projects' Component={Projects} />
            <Route path='/contact' Component={ContactUs} />
            <Route path='/privacy' Component={PrivacyPolicy} />
            <Route path='*' Component={NotFound} />
          </Routes>

          <Footer />
        </BrowserRouter>
        <div className="music_player">
          {
            isPlaying?(
              <button onClick={() => playMusic()} className='pi pi-pause'></button>
            ):(
              <button id='playMusic' onClick={() => playMusic()} className='pi pi-play'></button>
            )
          }
        </div>
      </center>
    </>
  )
}

export default App
