import React, { useState } from 'react';

const LiveScores = () => {
  const [liveScores, setLiveScores] = useState([
    {
      id: 1,
      tournament: 'New Zealand Women tour of Australia, 2024',
      match: '2nd T20I',
      teams: [
        { name: 'AUS-W', score: '142/10 (19.3)', flag: '/aus.png' },
        { name: 'NZ-W', score: '113/7 (20.0)', flag: '/nz.png' },
      ],
      venue: 'Mackay',
      result: 'AUS-W Won By 29 runs',
      playerOfTheMatch: { name: 'Ash Gardner', image: '/player1.jpg' },
    },
    {
      id: 2,
      tournament: 'Duleep Trophy, 2024',
      match: 'Match 6',
      teams: [
        { name: 'IND-A', score: '297/10 & 286/8 d', flag: '/ind.png' },
        { name: 'IND-C', score: '234/10 & 217/10', flag: '/ind-c.png' },
      ],
      venue: 'Anantapur',
      result: 'IND-A Won By 132 runs',
      playerOfTheMatch: { name: 'Shashwat Rawat', image: '/player2.jpg' },
    },
    {
      id: 3,
      tournament: 'Duleep Trophy, 2024',
      match: 'Match 5',
      teams: [
        { name: 'IND-D', score: '349/10 & 305/10', flag: '/ind-d.png' },
        { name: 'IND-B', score: '282/10 & 115/10', flag: '/ind-b.png' },
      ],
      venue: 'Anantapur',
      result: 'IND-D Won By 257 runs',
      playerOfTheMatch: { name: 'Ricky Bhui', image: '/player3.jpg' },
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? liveScores.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % liveScores.length);
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Live Scores</h2>
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-4 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex overflow-x-auto snap-x snap-mandatory w-full">
            {liveScores.map((score, index) => (
              <div
                key={score.id}
                className={`flex-shrink-0 snap-center w-full md:w-1/2 lg:w-1/3 px-4 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-50'
                } transition-opacity duration-500`}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg h-96 text-black">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{score.tournament}</h3>
                    <span className="text-gray-600 text-sm">{score.match}</span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {score.teams.map((team, teamIndex) => (
                      <div key={teamIndex} className="flex items-center space-x-4">
                        <img
                          src={team.flag}
                          alt={team.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex flex-col">
                          <span className="text-lg font-medium">{team.name}</span>
                          <span className="text-gray-600 text-sm">{team.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-600 text-sm">{score.venue}</span>
                    <span className="text-lg font-medium">{score.result}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-600 text-sm">Player of the Match</span>
                    <div className="flex items-center space-x-2">
                      <img
                        src={score.playerOfTheMatch.image}
                        alt={score.playerOfTheMatch.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-lg font-medium">{score.playerOfTheMatch.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-4 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveScores;
