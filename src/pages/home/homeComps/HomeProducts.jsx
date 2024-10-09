import React, { useState } from "react";
import room from "../products/room.png";
import floor from "../products/floor.png";
import globe from "../products/globe.png";
import p1 from "../products/p1.png";
import VideoModal from "../../../components/VideoModal";

const HomeProducts = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("none");
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShowVideoModal(true);
  };
  const handleModalClose = () => {
    setSelectedProduct("none");
    setShowVideoModal(false);
  };
  return (
    <section className="h_section">
      {showVideoModal && (
        <VideoModal
          handleModalClose={handleModalClose}
          selectedProduct={selectedProduct}
        />
      )}
      <div className="partners_info_section">
        <h1 className="mt">TRENDING PRODUCTS</h1>
      </div>
      <div className="home_products_cards_container">
        <div
          className="home_products_container"
          onClick={() => handleProductSelect("room")}>
          <div className="card">
            <div className="imgBx">
              <img src={room} alt="Immersive Room - Pixel Pitch P1.8" />
            </div>
            <div className="contentBx">
              <h2>Immersive Room</h2>
              <div className="size">
                <h3>Pixel Pitch P1.8 Custom models 4mW*3mH*3mD</h3>
              </div>
              <div className="color">
                <h3>Used mainly in rental events</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home_products_container"
          onClick={() => handleProductSelect("globe")}>
          <div className="card">
            <div className="imgBx">
              <img
                src={globe}
                alt="3 Meter Globe - Custom modules 600 to 650 nits"
              />
            </div>
            <div className="contentBx">
              <h2>3 Meter Globe</h2>
              <div className="size">
                <h3>Custom modules 600 to 650 nits</h3>
              </div>
              <div className="color">
                <h3>Can be used permanent or rental </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home_products_container"
          onClick={() => handleProductSelect("floor")}>
          <div className="card">
            <div className="imgBx">
              <img src={floor} alt="Interactive Coffee Table" />
            </div>
            <div className="contentBx">
              <h2>Interactive Floor</h2>
              <div className="size">
                <h3>P3.91 500*500, with build in sensors</h3>
              </div>
              <div className="color">
                <h3>Used in events and Exhibitions</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home_products_container"
          onClick={() => handleProductSelect("p1")}>
          <div className="card">
            <div className="imgBx">
              <img src={p1} alt="P1.2 GOB Panel - Panel Size 640mm/480mm" />
            </div>
            <div className="contentBx">
              <h2>P1.2 GOB Panel</h2>
              <div className="size">
                <h3>Panel Size 640mm/480mm</h3>
              </div>
              <div className="color">
                <h3>Brightness 700 to 900 nits GOB Panel, Indoor use</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
