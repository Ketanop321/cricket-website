import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './registrationform';
import BackToTopButton from './components/backtotop';


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

const playersData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Batsman',
    matches: 50,
    runs: 2000,
    average: 40.0,
    image: 'https://via.placeholder.com/150', // You can replace this with real image URLs
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Bowler',
    matches: 40,
    wickets: 80,
    bestFigures: '5/20',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'David Warner',
    role: 'All-rounder',
    matches: 70,
    runs: 3500,
    wickets: 50,
    average: 45.5,
    image: 'https://via.placeholder.com/150',
  },
];

const HomePage = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleRegisterClick = () => {
    setFormVisible(true); // Show the registration form
  };

  const handleCloseForm = () => {
    setFormVisible(false); // Hide the registration form
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">CricketVerse Cricket Tournaments</h1>
        <p className="mt-4 text-lg">Join exciting cricket tournaments in various formats: T20, One Day, and Test!</p>
        <Link to="/tournaments">  {/* Use Link to navigate to the ExploreTournaments page */}
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 mt-6 font-semibold rounded-lg">
            Explore Tournaments
          </button>
        </Link>
      </section>

      {/* Conditional Rendering of Registration Form */}
      {isFormVisible && <RegistrationForm onClose={handleCloseForm} />}

      {/* Tournaments Section */}
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
                <button
                  onClick={handleRegisterClick}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Players Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Featured Players</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {playersData.map((player) => (
            <div key={player.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={player.image} alt={player.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{player.name}</h3>
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Matches:</strong> {player.matches}</p>
                {player.runs && <p><strong>Runs:</strong> {player.runs}</p>}
                {player.wickets && <p><strong>Wickets:</strong> {player.wickets}</p>}
                {player.average && <p><strong>Avg:</strong> {player.average}</p>}
                {player.bestFigures && <p><strong>Best Figures:</strong> {player.bestFigures}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackToTopButton/>
    </div>
  );
};

export default HomePage