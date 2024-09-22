import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RotatingBanner = ({ tournamentsData }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % tournamentsData.length);
        setIsAnimating(false); // End animation
      }, 500); // Duration of slide animation
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(intervalId);
  }, [tournamentsData.length]);

  return (
    <section className="relative py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Upcoming Tournament</h2>
        <div
          className={`mt-6 transition-transform duration-500 ease-in-out transform ${
            isAnimating ? 'translate-x-full' : ''
          }`}
        >
          <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">{tournamentsData[currentBannerIndex].name}</h3>
          <p className="text-lg text-white mt-2">{tournamentsData[currentBannerIndex].date}</p>
          <Link to="/tournaments">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-110">
              Join Now!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RotatingBanner;