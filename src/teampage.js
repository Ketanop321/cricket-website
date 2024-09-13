import React from 'react';

const teamsData = [
  {
    id: 1,
    name: 'Mumbai Indians',
    country: 'India',
    logoUrl: 'https://example.com/mumbai-logo.jpg', // Placeholder logo URL
    description: 'Mumbai Indians is a franchise cricket team representing Mumbai, Maharashtra in the IPL.',
    championshipsWon: 5,
    captain: 'Rohit Sharma',
    coach: 'Mahela Jayawardene',
  },
  {
    id: 2,
    name: 'Sydney Sixers',
    country: 'Australia',
    logoUrl: 'https://example.com/sydney-logo.jpg', // Placeholder logo URL
    description: 'Sydney Sixers are a franchise cricket team based in Sydney, that competes in the Big Bash League.',
    championshipsWon: 3,
    captain: 'Moises Henriques',
    coach: 'Greg Shipperd',
  },
  {
    id: 3,
    name: 'Chennai Super Kings',
    country: 'India',
    logoUrl: 'https://example.com/chennai-logo.jpg', // Placeholder logo URL
    description: 'Chennai Super Kings is a franchise cricket team based in Chennai, Tamil Nadu, India.',
    championshipsWon: 4,
    captain: 'MS Dhoni',
    coach: 'Stephen Fleming',
  },
  // Add more teams as needed
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamsData.map((team) => (
          <div key={team.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={team.logoUrl} alt={team.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600">{team.name}</h2>
              <p className="text-gray-600"><strong>Country:</strong> {team.country}</p>
              <p className="text-gray-600"><strong>Captain:</strong> {team.captain}</p>
              <p className="text-gray-600"><strong>Coach:</strong> {team.coach}</p>
              <p className="text-gray-600"><strong>Championships Won:</strong> {team.championshipsWon}</p>

              <p className="text-gray-700 mt-4">{team.description}</p>
              
              <div className="text-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg">
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
