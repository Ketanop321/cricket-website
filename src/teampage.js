import React from 'react';
import MumbaiIndians from './assets/team logo/mi.png';
import ChennaiSuperKings from './assets/team logo/csk.png';
import KolkataKnightRiders from './assets/team logo/kkr.png';
import DelhiCapitals from './assets/team logo/dc.png';
import SunrisersHyderabad from './assets/team logo/srh.png';
import GujaratTitans from './assets/team logo/gt.png';
import RajasthanRoyals from './assets/team logo/rrs.png';
import RoyalChallengersBengaluru from './assets/team logo/rcb.png'
import LucknowSuperGiants from './assets/team logo/lsg.png'
import PunjabKings from './assets/team logo/pk.png'

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
    championshipsWon: 2,
    captain: 'Shreyas Iyer',
    coach: 'Chandrakant Pandit',
  },
  {
    id: 3,
    name: 'Chennai Super Kings',
    country: 'India',
    logo: ChennaiSuperKings, // Placeholder logo URL
    description: 'Chennai Super Kings is a franchise cricket team based in Chennai, Tamil Nadu, India.',
    championshipsWon: 5,
    captain: 'MS Dhoni',
    coach: 'Stephen Fleming',
  },
  {
    id: 4,
    name: 'Delhi Capitals',
    country: 'India',
    logo: DelhiCapitals, // Placeholder logo URL
    description: 'Delhi Capitals, formerly Delhi Daredevils, are a professional franchise cricket team based in Delhi that plays in the Indian Premier League.',
    championshipsWon: 0,
    captain: 'Ricky Ponting',
    coach: 'Rishabh Pant',
  },
  {
    id: 5,
    name: 'Sunrisers Hyderabad',
    country: 'India',
    logo: SunrisersHyderabad, // Placeholder logo URL
    description: 'Sunrisers Hyderabad are a professional franchise cricket team based in Hyderabad, Telangana, India, that plays in the Indian Premier League.',
    championshipsWon: 3,
    captain: 'Pat Cummins',
    coach: 'Daniel Vettori',
  },
  {
    id: 6,
    name: 'Gujarat Titans',
    country: 'India',
    logo: GujaratTitans, // Placeholder logo URL
    description: 'Sunrisers Hyderabad are a professional franchise cricket team based in Hyderabad, Telangana, India, that plays in the Indian Premier League.',
    championshipsWon: 3,
    captain: 'Pat Cummins',
    coach: 'Daniel Vettori',
  },
  {
    id: 7,
    name: 'Rajasthan Royals',
    country: 'India',
    logo: RajasthanRoyals, // Placeholder logo URL
    description: 'Rajasthan Royals are a professional franchise cricket team based in Jaipur, Rajasthan, that competes in the Indian Premier League.',
    championshipsWon: 4,
    captain: 'Sanju Samson',
    coach: 'Rahul Dravid',
  },
  {
    id: 8,
    name: 'Royal Challengers Bengaluru',
    country: 'India',
    logo: RoyalChallengersBengaluru, // Placeholder logo URL
    description: 'Rajasthan Royals are a professional franchise cricket team based in Jaipur, Rajasthan, that competes in the Indian Premier League.',
    championshipsWon: 4,
    captain: 'Faf du Plessis',
    coach: 'Andy Flower',
  },
  {
    id: 9,
    name: 'Lucknow Super Giants',
    country: 'India',
    logo: LucknowSuperGiants, // Placeholder logo URL
    description: 'Lucknow Super Giants is a professional franchise cricket team based in Lucknow, Uttar Pradesh that competes in the Indian Premier League.',
    championshipsWon: 3,
    captain: 'KL Rahul',
    coach: 'Justin Langer',
  },
  {
    id: 10,
    name: 'Punjab Kings',
    country: 'India',
    logo: PunjabKings, // Placeholder logo URL
    description: 'Lucknow Super Giants is a professional franchise cricket team based in Lucknow, Uttar Pradesh that competes in the Indian Premier League.',
    championshipsWon: 0,
    captain: 'Shikhar Dhawan',
    coach: 'Ricky Ponting',
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
