import React from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './teamsData';
import AdditionalTeamInfo from './addtionalteaminfo'; // Import the additional info component

const TeamDetails = () => {
  const { id } = useParams(); // Extract the team ID from the URL
  const team = teamsData.find((team) => team.id === parseInt(id)); // Find the team based on the ID

  if (!team) {
    return <div className="text-center mt-10">Team not found!</div>;
  }

  return (
    <div className="min-h-screen bg-white py-10"> {/* White background */}
      <div className="container mx-auto px-4">
        {/* Team Banner */}
        <div className="relative">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <img
              src={team.logo}
              alt={team.name}
              className="h-48 object-contain"
            />
          </div>
        </div>

        {/* Team Information */}
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">{team.name} Details</h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Team Overview</h2>
            <p className="text-gray-600"><strong>Country:</strong> {team.country}</p>
            <p className="text-gray-600"><strong>Captain:</strong> {team.captain}</p>
            <p className="text-gray-600"><strong>Coach:</strong> {team.coach}</p>
            <p className="text-gray-600"><strong>Championships Won:</strong> {team.championshipsWon}</p>
            <p className="text-gray-700 mt-4">{team.description}</p>
          </div>

          {/* Render the Additional Information Component */}
          <AdditionalTeamInfo team={team} /> {/* Pass the team data as props */}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
