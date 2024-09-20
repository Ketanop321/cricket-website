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
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null); // Track selected tournament

  const handleRegisterClick = (tournament) => {
    setSelectedTournament(tournament); // Set the selected tournament
    setFormVisible(true); // Show the registration form
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Hide the registration form
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
                
                <button
                  onClick={() => handleRegisterClick(tournament)} // Trigger registration form
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </button>
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
      <BackToTopButton />
    </div>
  );
};

export default TournamentPage;
