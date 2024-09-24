import React, { useState } from 'react';
import Australia from '../../assets/flags/aus.png';
import NewZealand from '../../assets/flags/nz.png';

const LiveScores = () => {
  const [liveScores] = useState([
    {
      id: 1,
      tournament: 'New Zealand Women tour of Australia, 2024',
      match: '2nd T20I',
      teams: [
        { name: 'AUS-W', score: '142/10 (19.3)', flag: Australia },
        { name: 'NZ-W', score: '113/7 (20.0)', flag: NewZealand },
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
        { name: 'IND', score: '297/10 & 286/8 d', flag: '/ind.png' },
        { name: 'BAN', score: '234/10 & 217/10', flag: '/ind-c.png' },
      ],
      venue: 'Anantapur',
      result: 'IND Won By 132 runs',
      playerOfTheMatch: { name: 'Shashwat Rawat', image: '/player2.jpg' },
    },
    {
      id: 3,
      tournament: 'Duleep Trophy, 2024',
      match: 'Match 5',
      teams: [
        { name: 'AFG', score: '349/10 & 305/10', flag: '/ind-d.png' },
        { name: 'SA', score: '282/10 & 115/10', flag: '/ind-b.png' },
      ],
      venue: 'Anantapur',
      result: 'AFG Won By 257 runs',
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
    <section className="py-4 bg-black text-white"> {/* Reduced padding from py-6 to py-4 */}
      <div className="container mx-auto px-2"> {/* Reduced container padding */}
        <h2 className="text-xl font-semibold text-center mb-4"> {/* Reduced text size */}
          Live Scores
        </h2>
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg
              className="w-4 h-4 text-white" // Reduced icon size from w-5 h-5 to w-4 h-4
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
                className={`flex-shrink-0 snap-center w-full md:w-1/3 px-2 ${activeIndex === index ? 'opacity-100' : 'opacity-50'
                  } transition-opacity duration-500`}
              >
                <div className="bg-white rounded-lg p-3 shadow-lg text-black"> {/* Adjusted height and layout */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-semibold"> {/* Reduced text size */}
                      {score.tournament}
                    </h3>
                    <span className="text-gray-600 text-xs">{score.match}</span> {/* Reduced text size */}
                  </div>
                  <div className="flex justify-between items-center"> {/* Flexbox for better alignment */}
                    {score.teams.map((team, teamIndex) => (
                      <div key={teamIndex} className="flex items-center space-x-2"> {/* Reduced spacing */}
                        <img
                          src={team.flag}
                          alt={team.name}
                          className="w-8 h-5 rounded" // Rectangular flag size
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{team.name}</span> {/* Reduced text size */}
                          <span className="text-gray-600 text-xs text-center">{team.score}</span> {/* Centered the score */}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-2"> {/* Reduced margin */}
                    <span className="text-gray-600 text-xs">{score.venue}</span> {/* Reduced text size */}
                    <span className="text-sm font-medium">{score.result}</span> {/* Reduced text size */}
                  </div>
                  <div className="flex items-center space-x-2 mt-2"> {/* Flex for proper alignment */}
                    <img
                      src={score.playerOfTheMatch.image}
                      alt={score.playerOfTheMatch.name}
                      className="w-8 h-8 rounded-full" // Player image size
                    />
                    <div className="flex items-center space-x-1"> {/* Nested flex for flag and name */}
                      <img
                        src={score.teams[0].flag} // Assuming player is from the first team
                        alt="Country Flag"
                        className="w-6 h-4 rounded" // Country flag size
                      />
                      <span className="text-sm font-medium">{score.playerOfTheMatch.name}</span> {/* Player name */}
                    </div>
                    <span className="text-xs text-gray-600">Player of the match</span> {/* Text under player name */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg
              className="w-4 h-4 text-white" // Reduced icon size from w-5 h-5 to w-4 h-4
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
