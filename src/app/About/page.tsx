import React from "react";
import "../Styles/About.css"; 

const Page = () => {
  return (
    <div className="about-container">
      <div className="background-image">
        <img src="/aboutbg.jpg" alt="Background" className="image" />
        <div className="content-container">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">
            Welcome to Watch World, where we believe a watch is more than just
            an accessory. It is a statement of style, precision, and
            craftsmanship. Our mission is to bring you a diverse selection of
            premium timepieces from around the globe, each chosen for its
            quality and unique design. Whether you are a connoisseur or simply
            appreciate the beauty of a well-made watch, we are here to help you
            find the perfect piece to complement your personality and elevate
            your look.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
