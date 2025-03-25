import React from "react";
import "./architecturePage.css";

const ArchitecturePage = () => {
  return (
    <div className="architecture-page">
      <header className="header">b.e architecture</header>
      <main>
        <div className="image-container">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Point Nepean Residence"
          />
          <h2>Point Nepean Residence, Portsea</h2>
        </div>
        <div className="info-container">
          <div className="info-block">
            <h3>Address</h3>
            <p>100 Stephenson St</p>
            <p>Unit 63, 1 Porter St</p>
            <p>Cremorne VIC 3121</p>
            <p>Byron Bay NSW 2481</p>
            <a href="#">Get Directions</a>
          </div>
          <div className="info-block">
            <h3>Contact</h3>
            <p>
              <strong>Melbourne</strong>: +613 8416 1600
            </p>
            <p>Email: office@bearchitecture.com</p>
            <p>
              <strong>Byron Bay</strong>: +612 5629 7288
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArchitecturePage;
