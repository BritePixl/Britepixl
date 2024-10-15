import React, { useState } from "react";
import "./refrences.scss";
import gitex from "./ref/gitex.png";
import world_utilities_congress from "./ref/world_utilities_congress.png";
import img1 from "./ref/1.jpg";
import img2 from "./ref/2.jpg";
import img3 from "./ref/3.jpg";
import img4 from "./ref/4.jpg";
import img5 from "./ref/5.jpg";
import img6 from "./ref/6.jpg";
import img7 from "./ref/7.jpg";
import img8 from "./ref/8.jpg";
import img9 from "./ref/9.jpg";
import img10 from "./ref/10.jpg";
import ProjectsModal from "./ProjectsModal";

const Refrences = () => {
  const [projectIndex, setProjectIndex] = useState(-1);
  const [projectModal, setProjectModal] = useState(false);
  const showProjectModal = (index) => {
    console.log("showProjectModal");
    // setProjectIndex(index);
    // setProjectModal(true);
  };
  const handleClose = () => {
    setProjectIndex(-1);
    setProjectModal(false);
  };
  return (
    <div>
      {projectModal && (
        <ProjectsModal
          showProjectModal={showProjectModal}
          handleClose={handleClose}
          projectIndex={projectIndex}
        />
      )}
      <div className="partners_info_section">
        <h2 className="mt">OUR SUCCESS STORIES</h2>
      </div>
      <div>
        <div className="card__collection clear-fix">
          <div onClick={() => showProjectModal(1)} className="cards cards--two">
            <img src={gitex} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Abu Dhabi UAE</p>
          </div>

          <div
            onClick={() => showProjectModal(2)}
            className="cards cards--three">
            <img
              src={world_utilities_congress}
              className="img-responsive"
              alt=""
            />
            <span className="cards--three__rect-1">
              <span className="shadow-1"></span>
              <p>Abu Dhabi UAE</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2"></span>
            </span>
            <span className="cards--three__circle"></span>
          </div>

          <div onClick={() => showProjectModal(1)} className="cards cards--two">
            <img src={img1} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Saudi Arabia</p>
          </div>

          <div
            onClick={() => showProjectModal(2)}
            className="cards cards--three">
            <img src={img2} className="img-responsive" alt="" />
            <span className="cards--three__rect-1">
              <span className="shadow-1"></span>
              <p>Dubai UAE</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2"></span>
            </span>
            <span className="cards--three__circle"></span>
          </div>

          <div onClick={() => showProjectModal(3)} className="cards cards--two">
            <img src={img3} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Saudi Arabia</p>
          </div>

          <div
            onClick={() => showProjectModal(4)}
            className="cards cards--three">
            <img src={img4} className="img-responsive" alt="" />
            <span className="cards--three__rect-1">
              <span className="shadow-1"></span>
              <p>Dubai UAE</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2"></span>
            </span>
            <span className="cards--three__circle"></span>
          </div>

          <div onClick={() => showProjectModal(5)} className="cards cards--two">
            <img src={img5} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Dubai - UAE</p>
          </div>

          <div onClick={() => showProjectModal(6)} className="cards cards--two">
            <img src={img6} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Dubai - UAE</p>
          </div>

          <div
            onClick={() => showProjectModal(7)}
            className="cards cards--three">
            <img src={img7} className="img-responsive" alt="" />
            <span className="cards--three__rect-1">
              <span className="shadow-1"></span>
              <p>Abu Dhabi</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2"></span>
            </span>
            <span className="cards--three__circle"></span>
          </div>

          <div onClick={() => showProjectModal(8)} className="cards cards--two">
            <img src={img8} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Dubai - UAE</p>
          </div>

          <div
            onClick={() => showProjectModal(9)}
            className="cards cards--three">
            <img src={img9} className="img-responsive" alt="" />
            <span className="cards--three__rect-1">
              <span className="shadow-1"></span>
              <p>Saudi Arabia</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2"></span>
            </span>
            <span className="cards--three__circle"></span>
          </div>

          <div
            onClick={() => showProjectModal(10)}
            className="cards cards--two">
            <img src={img10} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>Dubai - UAE</p>
            {/* <ul className="cards__list">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                    </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refrences;
