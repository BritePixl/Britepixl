import React, { useState } from "react";
import "./homeComps.css";
import { Link } from "react-router-dom";
import ProjectsVideoModal from "./ProjectsVideoModal";
import video from "./videos/gitex2024.mp4";

const HomeProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (event) => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <ProjectsVideoModal handleModalClose={handleModalClose} video={video} />
      )}
      <section className="h_section">
        <div className="partners_info_section">
          <h1 className="mt">RECENT PROJECTS</h1>
        </div>
        <div
          className="home_projects_container"
          onClick={() => handleModal("gitex2024")}>
          <div className="project project4">
            <div className="project_content">
              <h3>Dubai - UAE</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nulla vel velit tristique fermentum.</p> */}
            </div>
          </div>
          <div className="project project5">
            <div className="project_content">
              <h3>Abu Dhabi - UAE</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nulla vel velit tristique fermentum.</p> */}
            </div>
          </div>

          {/*  Looping */}
          <div className="project project1">
            <div className="project_content">
              <h3>Saudi Arabia</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nulla vel velit tristique fermentum.</p> */}
            </div>
          </div>
          <div className="project project2">
            <div className="project_content">
              <h3>Dubai - UAE</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nulla vel velit tristique fermentum.</p> */}
            </div>
          </div>
          <div className="project project3">
            <div className="project_content">
              <h3>Saudi Arabia</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nulla vel velit tristique fermentum.</p> */}
            </div>
          </div>
        </div>
        <center>
          <Link className="download" to="/projects">
            More
          </Link>
        </center>
      </section>
    </>
  );
};

export default HomeProjects;
