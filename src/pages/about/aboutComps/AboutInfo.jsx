import React from "react";
import { ReactTyped } from "react-typed";
import CoProfile from "../image/BritePixl_Profile_2024.pdf";

import "./aboutComp.css";
import aboutMainImg from "../image/about_main.png";
import { useNavigate } from "react-router-dom";

const AboutInfo = () => {
  const navigate = useNavigate();
  const downloadProfile = () => {
    window.open(CoProfile);
  };
  return (
    <div className="about_two_section_padding_top">
      <div className="pref_card mid">
        <p>
          <i className="mt">BritePixl</i> Where innovative excellence transforms
          visual and interactive experiences.
        </p>
      </div>
      <div className="about_pref">
        <div className="mid">
          <div>
            <div>
              <h1 className="about_pref_title mt">ABOUT US</h1>
            </div>
            <div>
              <h2 className="about_pref_content">
                At <i className="mt">BritePixl</i>, we illuminate visions by
                crafting exceptional visual and interactive solutions. Our
                mission combines high-tech innovation with quality design,
                delivering customized experiences that empower client success
                across diverse industries. Let's bring your vision to life!
              </h2>
              <div className="about_info_buttons">
                <button
                  onClick={() => downloadProfile()}
                  className="download right_3d">
                  Download Profile
                </button>

                <button
                  onClick={() => navigate("/visual-solutions")}
                  className="download right_3d">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="mid">
          <img className="about_main_img" src={aboutMainImg} alt="about us" />
        </div>
      </div>
      <div className="typing_animation">
        <h2>
          WE ARE <i className="mt">BRITEPIXL</i>,{" "}
          <ReactTyped
            strings={["  WE ILLUMINATE VISIONS", "  YOUR SEAMLESS  PARTNER"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
      </div>
    </div>
  );
};

export default AboutInfo;
