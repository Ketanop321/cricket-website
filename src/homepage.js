import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './registrationform';
import BackToTopButton from './components/backtotop';

const tournamentsData = [
  { id: 1, name: 'T20 Championship', date: 'October 5, 2024', format: 'T20', location: 'Mumbai', description: 'Exciting T20 format tournament with top teams competing for the trophy.' },
  { id: 2, name: 'One Day World Cup', date: 'November 15, 2024', format: 'One Day', location: 'Delhi', description: 'A thrilling one-day international series for cricket fans.' },
  { id: 3, name: 'Test Series', date: 'December 20, 2024', format: 'Test', location: 'Kolkata', description: 'The classic format, bringing you the best of test cricket action.' }
];

const HomePage = () => {
  const [isFormVisible, setFormVisible] = useState(false); // Controls form visibility
  const [registeredTournament, setRegisteredTournament] = useState(null); // Stores registered tournament info
  const [isCancelModalVisible, setCancelModalVisible] = useState(false); // Controls cancel modal visibility

  // When the "Register" button is clicked, show the form
  const handleRegisterClick = (tournament) => {
    setRegisteredTournament(tournament);
    setFormVisible(true);
  };

  // When the "Cancel Registration" button is clicked, show the cancel modal
  const handleCancelRegistration = () => {
    setCancelModalVisible(true);
  };

  // Confirm cancellation of registration
  const confirmCancelRegistration = () => {
    setRegisteredTournament(null); // Clear registered tournament
    setCancelModalVisible(false);  // Close modal
  };

  // Close the cancel modal without cancelling
  const closeCancelModal = () => {
    setCancelModalVisible(false);
  };

  // Close the registration form
  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">XYZ Organization Cricket Tournaments</h1>
        <p className="mt-4 text-lg">Join exciting cricket tournaments in various formats: T20, One Day, and Test!</p>
        <Link to="/tournaments">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 mt-6 font-semibold rounded-lg">
            Explore Tournaments
          </button>
        </Link>
      </section>

      {/* Registration Form - shown when "Register" button is clicked */}
      {isFormVisible && (
        <RegistrationForm
          onClose={handleCloseForm}
          tournament={registeredTournament}
        />
      )}

      {/* Tournament List */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Upcoming Tournaments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tournamentsData.map((tournament) => (
            <div key={tournament.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-green-500 p-4 text-white text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4">
                <p><strong>Format:</strong> {tournament.format}</p>
                <p><strong>Location:</strong> {tournament.location}</p>
                <p>{tournament.description}</p>

                {registeredTournament && registeredTournament.id === tournament.id ? (
                  <button
                    onClick={handleCancelRegistration}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel Registration
                  </button>
                ) : (
                  <button
                    onClick={() => handleRegisterClick(tournament)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Register
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cancel Registration Modal */}
      {isCancelModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
