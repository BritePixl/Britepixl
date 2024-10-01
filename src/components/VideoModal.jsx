import React from "react";
import Room from "../assets/videos/slider.webm";
import { motion } from "framer-motion";
import "primeicons/primeicons.css";

const VideoModal = ({ handleModalClose, selectedProduct }) => {
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
        <div className="modal_video">
          <video src={Room} autoPlay loop></video>
        </div>
      </motion.div>
    </>
  );
};

export default VideoModal;
