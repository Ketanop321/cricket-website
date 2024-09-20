import React, { useState } from 'react';
import BackToTopButton from './components/backtotop';
import RegistrationForm from './registrationform';

const tournaments = [
  {
    id: 1,
    name: 'T20 Championship',
    date: 'October 2024',
    format: 'T20',
    location: 'XYZ Stadium',
    teams: ['Team A', 'Team B'],
    prizePool: '$500,000',
  },
  {
    id: 2,
    name: 'One Day Series',
    date: 'November 2024',
    format: 'One Day',
    location: 'ABC Grounds',
    teams: ['Team C', 'Team D'],
    prizePool: '$750,000',
  },
  {
    id: 3,
    name: 'Test Match League',
    date: 'December 2024',
    format: 'Test',
    location: 'DEF Cricket Field',
    teams: ['Team E', 'Team F'],
    prizePool: '$1,000,000',
  },
];

const TournamentPage = () => {
  const [isFormVisible, setFormVisible] = useState(false); // Controls form visibility
  const [selectedTournament, setSelectedTournament] = useState(null); // Track selected tournament
  const [registeredTournament, setRegisteredTournament] = useState(null); // Track registered tournament
  const [isCancelModalVisible, setCancelModalVisible] = useState(false); // Controls cancel modal visibility

  const handleRegisterClick = (tournament) => {
    setSelectedTournament(tournament); // Set the selected tournament
    setRegisteredTournament(tournament); // Mark the tournament as registered
    setFormVisible(true); // Show the registration form
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Hide the registration form
  };

  const handleCancelRegistrationClick = () => {
    setCancelModalVisible(true); // Show cancel modal
  };

  const confirmCancelRegistration = () => {
    setRegisteredTournament(null); // Clear registered tournament
    setCancelModalVisible(false); // Close modal
  };

  const closeCancelModal = () => {
    setCancelModalVisible(false); // Close modal without cancelling
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Tournaments</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore all available tournaments and join the cricket excitement!
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4">
                <p><strong>Format:</strong> {tournament.format}</p>
                <p><strong>Location:</strong> {tournament.location}</p>
                <p><strong>Teams:</strong> {tournament.teams.join(', ')}</p>
                <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>

                {registeredTournament && registeredTournament.id === tournament.id ? (
                  // Show "Cancel Registration" button if already registered
                  <button
                    onClick={handleCancelRegistrationClick}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel Registration
                  </button>
                ) : (
                  // Show "Register" button if not registered
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

      {/* Conditional Rendering of Registration Form */}
      {isFormVisible && (
        <RegistrationForm
          onClose={handleCloseForm}
          selectedTournament={selectedTournament} // Pass the selected tournament
        />
      )}

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

export default TournamentPage;
