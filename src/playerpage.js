import React from 'react';

const PlayerPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Top Cricket Players</h1>
        <p className="mt-4 text-lg">Explore the profiles of the top cricket players participating in our tournaments.</p>
      </section>

      {/* Players Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Featured Players</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Player Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-yellow-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p>Batsman</p>
            </div>
            <div className="p-4">
              <p>Matches: 50</p>
              <p>Runs: 2000 | Avg: 40.00</p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg">View Profile</button>
            </div>
          </div>

          {/* Repeat for other players */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p>Bowler</p>
            </div>
            <div className="p-4">
              <p>Matches: 45</p>
              <p>Wickets: 75 | Avg: 20.5</p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg">View Profile</button>
            </div>
          </div>
        </div>
      </section>

      {/* Player Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Player Statistics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Stats Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p>Matches: 50</p>
              <p>Runs: 2000 | Avg: 40.00</p>
            </div>
          </div>

          {/* Repeat for other players */}
        </div>
      </section>
    </div>
  );
};

export default PlayerPage;
