import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../registration/registrationform';
import BackToTopButton from '../../components/backtotop';
import './cricketstadium.css';
import CookieConsent from '../../components/cookie';
import backgroundImage from '../../assets/cricketstadium.png';  // Add your background image
import background from '../../assets/back.png';

const tournamentsData = [
  {
    id: 1,
    name: 'T20 Championship',
    date: 'October 2024',
    format: 'T20',
    location: 'XYZ Stadium',
    description: 'Exciting T20 matches with top international teams.',
  },
  {
    id: 2,
    name: 'One Day Cup',
    date: 'November 2024',
    format: 'One Day',
    location: 'ABC Stadium',
    description: 'Experience intense One Day matches between competitive teams.',
  },
  {
    id: 3,
    name: 'Test Series',
    date: 'December 2024',
    format: 'Test',
    location: 'DEF Stadium',
    description: 'A classic Test Series that showcases endurance and skill.',
  },
];

const HomePage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [registeredTournament, setRegisteredTournament] = useState(null);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Rotating banner effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % tournamentsData.length);
        setIsAnimating(false); // End animation
      }, 500); // Duration of slide animation
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleRegisterClick = (tournament) => {
    setCancelModalVisible(false); // Close cancel registration modal
    setDetailsModalVisible(false); // Close view details modal
    setFormVisible(true);
    setRegisteredTournament(tournament);
  };

  const handleCancelRegistration = () => {
    setFormVisible(false); // Close registration form
    setDetailsModalVisible(false); // Close view details modal
    setCancelModalVisible(true);
  };

  const confirmCancelRegistration = () => {
    setRegisteredTournament(null);
    setCancelModalVisible(false);
  };

  const closeCancelModal = () => {
    setCancelModalVisible(false);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleViewDetailsClick = (tournament) => {
    setFormVisible(false); // Close registration form
    setCancelModalVisible(false); // Close cancel registration modal
    setSelectedTournament(tournament);
    setDetailsModalVisible(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalVisible(false);
  };

  const handleCardHover = () => {
    setIsCardHovered(true);
  };

  const handleCardLeave = () => {
    setIsCardHovered(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Hero Section */}
      <section
        className="text-white py-20 text-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${background})`, // Use the provided image as the background
          backgroundSize: "cover",
          backgroundPosition: "bottom center", // Shift the background image upwards
          backgroundRepeat: "no-repeat",
          minHeight: '800px',
        }}
      >
        <div className="flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold">CricketVerse Cricket Tournaments</h1>
          <p className="mt-4 text-lg">
            Join exciting cricket tournaments in various formats: T20, One Day, and Test!
          </p>
          <Link to="/tournaments">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 mt-6 font-semibold rounded-lg">
              Explore Tournaments
            </button>
          </Link>
        </div>
      </section>

      <CookieConsent />
 
      {/* Upcoming Tournament Section */}
      <section
        className="relative py-8 my-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          filter: 'brightness(1.1)', // Make the background image slightly brighter
        }}
      >
        <div className="bg-gradient-to-r from-black/40 via-transparent to-black/40 py-8">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mx-auto w-4/5 md:w-3/5">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 drop-shadow-lg">
                Upcoming Tournament
              </h2>
              <div
                className={`mt-6 duration-500 ease transform ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <h3 className="text-3xl font-extrabold text-gray-900 drop-shadow-lg">
                  {tournamentsData[currentBannerIndex].name}
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  {tournamentsData[currentBannerIndex].date}
                </p>
                <Link to="/tournaments">
                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-110">
                    Join Now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {isFormVisible && (
        <RegistrationForm onClose={handleCloseForm} tournament={registeredTournament} />
      )}

      {/* Tournament List Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Tournaments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tournamentsData.map((tournament) => (
            <div
              key={tournament.id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden tournament-card ${isCardHovered ? 'hover:bg-gray-100' : ''}`}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="bg-green-500 p-4 text-white text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4 card-content">
                <p>
                  <strong>Format:</strong> {tournament.format}
                </p>
                <p>
                  <strong>Location:</strong> {tournament.location}
                </p>
                <p>{tournament.description}</p>

                {registeredTournament && registeredTournament.id === tournament.id ? (
                  <button
                    onClick={handleCancelRegistration}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel Registration
                  </button>
                ) : (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleRegisterClick(tournament)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Register
                    </button>
                    <button
                      onClick={() => handleViewDetailsClick(tournament)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tournament Details Modal */}
      {isDetailsModalVisible && selectedTournament && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedTournament.name}</h2>
            <p>
              <strong>Date:</strong> {selectedTournament.date}
            </p>
            <p>
              <strong>Format:</strong> {selectedTournament.format}
            </p>
            <p>
              <strong>Location:</strong> {selectedTournament.location}
            </p>
            <p className="mt-4">{selectedTournament.description}</p>
            <button
              onClick={closeDetailsModal}
              className="mt-4 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cancel Registration Modal */}
      {isCancelModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Cancel Registration</h2>
            <p>Are you sure you want to cancel your registration?</p>
            <div className="flex justify-between mt-6">
              <button
                onClick={confirmCancelRegistration}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
              >
                Yes, Cancel
              </button>
              <button
                onClick={closeCancelModal}
                className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                No, Keep
              </button>
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
    </div>
  );
};

export default HomePage;