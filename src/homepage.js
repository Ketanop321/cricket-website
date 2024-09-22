import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './registrationform';
import BackToTopButton from './components/backtotop';
import CookieConsent from './components/cookie';
import RotatingBanner from './RotatingBanner'; // Import the new component
import './css/cricketstadium.css';

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
  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleRegisterClick = (tournament) => {
    setRegisteredTournament(tournament);
    setFormVisible(true);
  };

  const handleCancelRegistration = () => {
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
    setSelectedTournament(tournament);
    setDetailsModalVisible(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalVisible(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-blue-600 text-white py-20 text-center opacity-100 flex items-center justify-center"
        style={{
          backgroundImage: "url('/cricketstadium.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: '800px',
        }}
      >
        <div className="flex flex-col items-center justify-center">
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

      <RotatingBanner tournamentsData={tournamentsData} /> {/* Use the new component */}

      {/* Registration Form */}
      {isFormVisible && (
        <RegistrationForm onClose={handleCloseForm} tournament={registeredTournament} />
      )}

      {/* Tournament List */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Tournaments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tournamentsData.map((tournament) => (
            <div key={tournament.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-green-500 p-4 text-white text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4">
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
            <div className="flex justify-between mt-6">
              <button
                onClick={closeDetailsModal}
                className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Registration Modal */}
      {isCancelModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Cancel Registration</h2>
            <p className="mb-4">Do you really want to cancel your registration?</p>
            <div className="flex justify-between">
              <button
                onClick={confirmCancelRegistration}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={closeCancelModal}
                className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                No
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