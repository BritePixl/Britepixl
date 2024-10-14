import React, { useEffect, useState } from "react";
import "./home.scss";
import slideVideo from "../../assets/videos/slider.webm";
import "./home.js";
import ContactForm from "../contact/contactComps/ContactForm.jsx";
import HomeProjects from "./homeComps/HomeProjects.jsx";
import HomeProducts from "./homeComps/HomeProducts.jsx";
import Splash from "../../components/Splash.jsx";
import { ReactTyped } from "react-typed";

const Home = () => {
  const playFromHome = () => {
    try {
      document.getElementById("playMusic").click();
    } catch (error) {
      // Ignore
    }
  };
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Simulating loading time of 1 second.
  }, []);
  const [showTyped, setShowTyped] = useState(true);
  return (
    <>
      <title>
        Innovative LED Display Solutions | Outdoor & Indoor LED Screens -
        BritePixl
      </title>
      {!isLoaded && <Splash />}
      <div onClick={() => playFromHome()} className="home_section_page">
        <video
          autoPlay
          muted
          loop
          className="video_slider"
          playsInline
          preload="auto"
          src={slideVideo}
          type="video/webm"
        />
        <div className="home_container_content">
          <h2 className="paragraph">
            {showTyped && (
              <ReactTyped
                typeSpeed={50}
                backSpeed={30}
                loop={false}
                backDelay={3000}
                onComplete={() => setShowTyped(false)}
                showCursor={false}
                strings={[
                  "Out of the box solutions ",
                  "Expect the unexpected",
                  "Capturing audience not things",
                  "",
                ]}></ReactTyped>
            )}
          </h2>
        </div>
      </div>
      <div className="home_container">
        <HomeProjects />
        <HomeProducts />
      </div>
      <div className="home_contact_us_section">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
