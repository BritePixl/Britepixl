import React from "react";
import Room from "../pages/home/products/1.mp4";
import Floor from "../pages/home/products/2.mp4";
import Globe from "../pages/home/products/3.mp4";
import P1 from "../pages/home/products/4.mp4";
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
          {selectedProduct === "room" && (
            <video muted src={Room} autoPlay loop />
          )}
          {selectedProduct === "globe" && (
            <video muted src={Globe} autoPlay loop />
          )}
          {selectedProduct === "floor" && (
            <video muted src={Floor} autoPlay loop />
          )}
          {selectedProduct === "p1" && <video muted src={P1} autoPlay loop />}
        </div>
      </motion.div>
    </>
  );
};

export default VideoModal;
