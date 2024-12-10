import React from 'react';
import '../css/Preloader.css'; // Add your preloader styles here
import Logo from "../assets/Webminds.webp"

const Preloader = () => {
  return (
    <div className="preloader">
      <img 
        src={Logo}
        alt="Website Logo" 
        className="preloader-image" 
      />
      <p className="preloader-text">WebMinds</p>
    </div>
  );
};

export default Preloader;
