import React from 'react';

const PlayerStats = ({ player, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transition-transform transform scale-100 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">{player.name} - Stats</h2>

        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold">Batting Stats</h3>
          <p><strong>Matches:</strong> {player.matches}</p>
          <p><strong>Runs:</strong> {player.runs}</p>
          <p><strong>Highest Score:</strong> {player.highestScore}</p>
          {/* Additional stats can be added here */}
        </div>

        <h3 className="text-lg font-semibold mt-4">Recent Performances</h3>
        <ul className="list-disc list-inside">
          {player.recentPerformances.map((match, index) => (
            <li key={index} className="flex justify-between py-1">
              <span><strong>{match.score}</strong> vs {match.opposition}</span>
              <span className="text-gray-500">{match.date}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mt-6">
          <button onClick={onClose} className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;