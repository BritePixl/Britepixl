import React, { useEffect, useState } from "react";
import "./contact.css";

import "../../../public/wave.js";
import MyMapComponent from "./MyMapComponent .jsx";
import ContactForm from "./contactComps/ContactForm.jsx";
import slideVideo from "../../assets/videos/slider.webm";
import Splash from "../../components/Splash.jsx";

const ContactUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      <title>Contact BritePixl | LED Screen Suppliers & Rentals in Duba</title>
      {!isLoaded && <Splash />}
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="video_slider"
          src={slideVideo}
          type="video/webm"
        />
        {/* <div className="home_container_content">
          <h2 className='paragraph'>We create stunning visual display solutions empowering brand vision and visibility through ecstatic and engaging solutions. Providing audiences with blended aesthetics and functionality.</h2>
        </div> */}
      </div>
      <div className="contact_slider_container">
        <ContactForm />
        <MyMapComponent />
      </div>
    </>
  );
};

export default ContactUs;
