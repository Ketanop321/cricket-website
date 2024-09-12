import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">XYZ Organization Cricket Tournaments</h1>
        <p className="mt-4 text-lg">Join exciting cricket tournaments in various formats: T20, One Day, and Test!</p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 mt-6 font-semibold rounded-lg">
          Explore Tournaments
        </button>
      </section>

      {/* Tournaments Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Upcoming Tournaments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Tournament Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">T20 Championship</h3>
              <p>October 2024</p>
            </div>
            <div className="p-4">
              <p>Format: T20</p>
              <p>Location: XYZ Stadium</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Register</button>
            </div>
          </div>

          {/* Repeat for other tournaments */}
        </div>
      </section>

      {/* Featured Players Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Featured Players</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Player Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Player Name</h3>
              <p>Role: Batsman</p>
              <p>Matches: 50 | Runs: 2000 | Avg: 40.00</p>
            </div>
          </div>

          {/* Repeat for other players */}
        </div>
      </section>

      {/* Live Scores Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Live Scores</h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <p>Match: Team A vs Team B</p>
          <p>Score: 120/5 in 15.2 Overs</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
