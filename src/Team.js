import React from 'react';

const TeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-red-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Meet the Teams</h1>
        <p className="mt-4 text-lg">Explore the teams participating in our cricket tournaments!</p>
      </section>

      {/* Teams Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Participating Teams</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Team Cards */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">Team A</h3>
              <p>Captain: John Doe</p>
            </div>
            <div className="p-4">
              <p>Matches: 20</p>
              <p>Wins: 15 | Losses: 5</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">View Team</button>
            </div>
          </div>

          {/* Repeat for other teams */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">Team B</h3>
              <p>Captain: Jane Smith</p>
            </div>
            <div className="p-4">
              <p>Matches: 18</p>
              <p>Wins: 12 | Losses: 6</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">View Team</button>
            </div>
          </div>

          {/* Another Team */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-purple-500 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">Team C</h3>
              <p>Captain: Alex Johnson</p>
            </div>
            <div className="p-4">
              <p>Matches: 22</p>
              <p>Wins: 17 | Losses: 5</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">View Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Team Statistics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Stats Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Team A</h3>
              <p>Total Matches: 20</p>
              <p>Wins: 15</p>
              <p>Losses: 5</p>
            </div>
          </div>

          {/* Repeat for other teams */}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
