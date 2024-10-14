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
            <>
              <video muted src={Room} autoPlay loop />
              Immersive Room - Pixel Pitch P1.8 Immersive Experience At
              BritePixl, we bring cutting-edge visual solutions with our Pixel
              Pitch P1.8 Immersive Room, designed to transform how audiences
              engage with digital content. This state-of-the-art LED display
              screen offers crystal-clear resolution, ensuring every detail is
              visible. Perfect for creating a fully immersive environment,
              whether it's for corporate presentations, interactive exhibits, or
              entertainment venues. Unparalleled Visual Clarity The P1.8 LED
              screen boasts an ultra-fine pixel pitch, making it ideal for
              high-definition indoor environments. With this level of LED screen
              precision, you can achieve vivid colors, sharper images, and a
              seamless display across the entire room. Whether used as a
              backdrop or an interactive display, the P1.8 immersive room
              ensures an unforgettable visual experience. Perfect for Indoor LED
              Applications This immersive solution is suited for a variety of
              indoor LED screen applications. From event stages and corporate
              environments to digital art exhibits, the Pixel Pitch P1.8 LED
              display offers unmatched flexibility. Our indoor LED screens are
              designed for maximum engagement, providing an innovative way to
              deliver your message. Flexible and Customizable LED Display
              Solutions At BritePixl, we understand that every project is
              unique, which is why our immersive room solutions can be tailored
              to fit your specific needs. Whether you need a customized LED
              screen for large-scale indoor environments or a more compact
              immersive room for smaller setups, our LED display experts can
              design a solution that works for you. The Future of Immersive
              Technology With our P1.8 LED screens, experience the next level of
              visual storytelling. The combination of high-resolution LED panels
              and flexible screen technology ensures that our immersive room
              solutions are perfect for any industry looking to captivate their
              audience. Whether it's for advertising, corporate communications,
              or entertainment, this immersive LED display provides a dynamic,
              360-degree visual experience like no other. Why Choose BritePixl?
              We are one of the leading LED screen suppliers in Dubai, offering
              transparent LED screens, flexible LED displays, and customized LED
              screens to meet diverse client needs. Our P1.8 immersive room is
              just one example of how we push the boundaries of visual
              innovation. For LED screen rentals, indoor or outdoor LED display
              screens, or any other LED screen solution, trust BritePixl to
              deliver the best.
            </>
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
