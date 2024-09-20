import React from 'react';
import MumbaiIndians from './assets/team logo/mi.png';
import ChennaiSuperKings from './assets/team logo/csk.png';
import KolkataKnightRiders from './assets/team logo/kkr.png';

const teamsData = [
  {
    id: 1,
    name: 'Mumbai Indians',
    country: 'India',
    logo: MumbaiIndians, // Placeholder logo URL
    description: 'Mumbai Indians is a franchise cricket team representing Mumbai, Maharashtra in the IPL.',
    championshipsWon: 5,
    captain: 'Rohit Sharma',
    coach: 'Mahela Jayawardene',
  },
  {
    id: 2,
    name: 'Kolkata Knight Riders',
    country: 'India',
    logo: KolkataKnightRiders, // Placeholder logo URL
    description: 'KKR stands for Kolkata Knight Riders, a cricket team that plays in the Indian Premier League (IPL)',
    championshipsWon: 3,
    captain: 'Shreyas Iyer',
    coach: 'Chandrakant Pandit',
  },
  {
    id: 3,
    name: 'Chennai Super Kings',
    country: 'India',
    logo: ChennaiSuperKings, // Placeholder logo URL
    description: 'Chennai Super Kings is a franchise cricket team based in Chennai, Tamil Nadu, India.',
    championshipsWon: 4,
    captain: 'MS Dhoni',
    coach: 'Stephen Fleming',
  },
  {
    id: 4,
    name: 'Mumbai Indians',
    country: 'India',
    logo: MumbaiIndians, // Placeholder logo URL
    description: 'Mumbai Indians is a franchise cricket team representing Mumbai, Maharashtra in the IPL.',
    championshipsWon: 5,
    captain: 'Rohit Sharma',
    coach: 'Mahela Jayawardene',
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
