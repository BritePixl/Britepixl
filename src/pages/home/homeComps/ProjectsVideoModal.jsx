import React from "react";

import { motion } from "framer-motion";
import "primeicons/primeicons.css";

const ProjectsVideoModal = ({ handleModalClose, video }) => {
  return (
    <>
      <div
        className="video_modal_container"
        onClick={() => handleModalClose()}></div>
      <motion.div
        initial={{ top: "-100vh", opacity: 0 }}
        animate={{ top: "0px", opacity: 1 }}
        className="video_modal_container_video">
        <div className="video_modal_header">
          <button onClick={() => handleModalClose()} className="pi pi-times" />
        </div>
        <div className="modal_video project_modal_video">
          <video src={video} autoPlay loop controls muted />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsVideoModal;
