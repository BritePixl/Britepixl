import React from "react";
import "./ourServ.css";
const OurServices = () => {
  return (
    <div className="our_services_container_block">
      <h1 className="mt projects_title_section">OUR SERVICES</h1>
      <p className="projects_desc_section white_txt">
        We provide comprehensive design, engineering, and project management
        services tailored to each project
      </p>
      <br />
      <div className="our_services_container">
        <div className="block right_3d block1">
          <i className="our_serv_text">Technologies</i>
        </div>
        <div className="block right_3d block2">
          <i className="our_serv_text">Custom Visual Display Services</i>
        </div>
        <div className="block right_3d block3">
          <i className="our_serv_text">Immersive & Interactive Solutions</i>
        </div>
        <div className="block right_3d block4">
          <i className="our_serv_text">Project Culmination</i>
        </div>
        <div className="block right_3d block5">
          <i className="our_serv_text">Quality Assurance</i>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
