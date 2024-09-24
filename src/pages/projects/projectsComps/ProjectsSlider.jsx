import React, { useEffect } from "react";
import './projectsComps.scss'

export default function ProjectsSlider() {
    useEffect(() => {
      const script = document.createElement('script')
      script.src = './public//wave.js' // path of the plugin called Slick Slider
      script.async = false // false not work too
      document.body.append(script) // the element <script> is appended but no work
    }, [])
    useEffect(() => {
        let currentIndex = 0;  
        const slides = document.querySelectorAll('.slide');  

        function nextSlide() {  
            slides[currentIndex].classList.remove('active');  
            currentIndex = (currentIndex + 1) % slides.length;  
            slides[currentIndex].classList.add('active');  
        }
        setInterval(nextSlide, 5000); // Change slide every 3 seconds
      }, [])


  return (
    <div className="splitview skewed">
        <div className="slider">

            <div id="slide_no_1" className="slide active">
                <h1 className="projects_slider_title right_3d"></h1>
            </div>

            <div id="slide_no_2" className="slide">
            <h1 className="projects_slider_title right_3d"></h1>
            </div>

            <div id="slide_no_3" className="slide">
            <h1 className="projects_slider_title right_3d"></h1>
            </div>
            
        </div>
        <canvas id="fluid"></canvas>
    </div>
  );
}
