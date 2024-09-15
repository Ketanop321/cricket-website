// Preloader.js
import React from 'react';
import '../css/preloader.css'; // Import custom styles

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="cricket-ball"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
