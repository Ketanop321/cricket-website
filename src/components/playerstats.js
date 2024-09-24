import React from 'react';

const PlayerStats = ({ player, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{player.name} - Stats</h2>
        <p><strong>Role:</strong> {player.role}</p>
        <p><strong>Team:</strong> {player.team}</p>
        <p><strong>Matches:</strong> {player.matches}</p>
        {player.runs && <p><strong>Runs:</strong> {player.runs}</p>}
        {player.highestScore && <p><strong>Highest Score:</strong> {player.highestScore}</p>}
        {player.wickets && <p><strong>Wickets:</strong> {player.wickets}</p>}
        {player.bestBowling && <p><strong>Best Bowling:</strong> {player.bestBowling}</p>}
        
        <div className="mt-4 text-center">
          <button onClick={onClose} className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
