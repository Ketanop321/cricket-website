import React from 'react';
import { useNavigate } from 'react-router-dom';

const tournamentsData = [
  {
    id: 1,
    name: 'T20 Championship',
    date: 'October 2024',
    format: 'T20',
    location: 'XYZ Stadium',
    description: 'Join the exciting T20 Championship featuring the best cricket teams across the globe!',
  },
  {
    id: 2,
    name: 'One Day Cup',
    date: 'November 2024',
    format: 'One Day',
    location: 'ABC Stadium',
    description: 'Experience thrilling One Day matches with intense competition and world-class players.',
  },
  {
    id: 3,
    name: 'Test Series',
    date: 'December 2024',
    format: 'Test',
    location: 'DEF Stadium',
    description: 'Watch the ultimate test of endurance and skill in this classic Test Series tournament.',
  },
];

const ExploreTournaments = () => {
  const navigate = useNavigate();

  const handleLearnMore = (tournament) => {
    navigate('/learn-more', { state: { tournament } });
  };

  const handleRegister = (tournament) => {
    navigate('/register', { state: { tournament } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Tournaments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tournamentsData.map((tournament) => (
          <div key={tournament.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 p-4 text-white text-center">
              <h2 className="text-xl font-bold">{tournament.name}</h2>
              <p className="mt-2">{tournament.date}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4"><strong>Format:</strong> {tournament.format}</p>
              <p className="text-gray-600 mb-4"><strong>Location:</strong> {tournament.location}</p>
              <p className="text-gray-700 mb-6">{tournament.description}</p>
              <div className="text-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-2 rounded-lg mr-4"
                  onClick={() => handleLearnMore(tournament)}
                >
                  Learn More
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg"
                  onClick={() => handleRegister(tournament)}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTournaments;
