import React, { useState } from 'react';
import ViratKholi from '../../assets/player image/virat-kohli.png';
import Dhoni from '../../assets/player image/msd.png';
import PlayerStats from './PlayerStats'; // Import the new PlayerStats component

const playersData = [
  {
    id: 1,
    name: 'Virat Kohli',
    role: 'Batsman',
    team: 'India',
    matches: 254,
    runs: 12040,
    highestScore: 183,
    image: ViratKholi,
    bio: 'Virat Kohli is an Indian cricketer and former captain of the India national cricket team.',
    recentPerformances: [
      { score: '72', opposition: 'Australia', date: '2024-09-01' },
      { score: '45', opposition: 'England', date: '2024-08-25' },
      { score: '100', opposition: 'Pakistan', date: '2024-08-15' },
      { score: '88', opposition: 'South Africa', date: '2024-08-10' },
      { score: '54', opposition: 'Sri Lanka', date: '2024-08-05' },
    ],
  },
  {
    id: 2,
    name: 'Kane Williamson',
    role: 'Batsman',
    team: 'New Zealand',
    matches: 151,
    runs: 7173,
    highestScore: 238,
    image: Dhoni,
    bio: 'Kane Williamson is a New Zealand cricketer who captains the national team across formats.',
    recentPerformances: [
      { score: '35', opposition: 'India', date: '2024-09-02' },
      { score: '60', opposition: 'Bangladesh', date: '2024-08-28' },
      { score: '88', opposition: 'Pakistan', date: '2024-08-20' },
      { score: '40', opposition: 'Sri Lanka', date: '2024-08-14' },
      { score: '50', opposition: 'Australia', date: '2024-08-10' },
    ],
  },
  {
    id: 3,
    name: 'Pat Cummins',
    role: 'Bowler',
    team: 'Australia',
    matches: 92,
    wickets: 217,
    bestBowling: '6/23',
    image: 'https://example.com/pat.jpg',
    bio: 'Pat Cummins is an Australian international cricketer who is the captain of the Australian cricket team.',
    recentPerformances: [
      { score: '1/23', opposition: 'India', date: '2024-09-01' },
      { score: '2/15', opposition: 'New Zealand', date: '2024-08-28' },
      { score: '3/40', opposition: 'South Africa', date: '2024-08-20' },
      { score: '0/50', opposition: 'England', date: '2024-08-14' },
      { score: '4/30', opposition: 'Pakistan', date: '2024-08-10' },
    ],
  },
  // Add more players as needed
];

const PlayerPage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isStatsVisible, setStatsVisible] = useState(false);

  const handleViewStats = (player) => {
    setSelectedPlayer(player);
    setStatsVisible(true);
  };

  const closeStats = () => {
    setStatsVisible(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Players</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playersData.map((player) => (
          <div key={player.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-64 bg-gray-200">
              <img
                src={player.image}
                alt={player.name}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-600">{player.name}</h2>
              <p className="text-gray-600"><strong>Role:</strong> {player.role}</p>
              <p className="text-gray-600"><strong>Team:</strong> {player.team}</p>
              {player.matches && <p className="text-gray-600"><strong>Matches:</strong> {player.matches}</p>}
              {player.runs && <p className="text-gray-600"><strong>Runs:</strong> {player.runs}</p>}
              {player.highestScore && <p className="text-gray-600"><strong>Highest Score:</strong> {player.highestScore}</p>}
              {player.wickets && <p className="text-gray-600"><strong>Wickets:</strong> {player.wickets}</p>}
              {player.bestBowling && <p className="text-gray-600"><strong>Best Bowling:</strong> {player.bestBowling}</p>}

              <p className="text-gray-700 mt-4">{player.bio}</p>

              <div className="text-center mt-4">
                <button onClick={() => handleViewStats(player)} className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg">
                  View Stats
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isStatsVisible && selectedPlayer && (
        <PlayerStats player={selectedPlayer} onClose={closeStats} />
      )}
    </div>
  );
};

export default PlayerPage;
