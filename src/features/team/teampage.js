import React from 'react';
import { useNavigate } from 'react-router-dom';
import teamsData from '../team/teamsData'

const TeamPage = () => {
  <teamsData/>
  const navigate = useNavigate();

  // Reordering teams as in your request
  const reorderedTeams = [...teamsData.slice(0, 8), teamsData[9], teamsData[8]];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reorderedTeams.map((team) => (
          <div key={team.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-64 bg-gray-200">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="object-contain h-full w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600">{team.name}</h2>
              <p className="text-gray-600"><strong>Country:</strong> {team.country}</p>
              <p className="text-gray-600"><strong>Captain:</strong> {team.captain}</p>
              <p className="text-gray-600"><strong>Coach:</strong> {team.coach}</p>
              <p className="text-gray-600"><strong>Championships Won:</strong> {team.championshipsWon}</p>

              <p className="text-gray-700 mt-4">{team.description}</p>
              
              <div className="text-center mt-4">
                <button 
                  onClick={() => navigate(`/team/${team.id}`)} // Navigate to the team details page
                  className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg"
                >
                  View Team Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
