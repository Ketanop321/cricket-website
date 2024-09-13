import React from 'react';
import BackToTopButton from './components/backtotop';

const tournaments = [
  {
    name: 'T20 Championship',
    date: 'October 2024',
    format: 'T20',
    location: 'XYZ Stadium',
  },
  {
    name: 'One Day Series',
    date: 'November 2024',
    format: 'One Day',
    location: 'ABC Grounds',
  },
  {
    name: 'Test Match League',
    date: 'December 2024',
    format: 'Test',
    location: 'DEF Cricket Field',
  },
];

const TournamentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Tournaments</h2>
          <p className="text-lg text-gray-600 mt-2">Explore all available tournaments and join the cricket excitement!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {tournaments.map((tournament, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4">
                <p><span className="font-semibold">Format:</span> {tournament.format}</p>
                <p><span className="font-semibold">Location:</span> {tournament.location}</p>
                <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg">Register</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackToTopButton/>
    </div>
  );
};

export default TournamentPage;
