import React, { useState, useEffect } from 'react';
import Australia from '../../assets/flags/aus.png';
import NewZealand from '../../assets/flags/nz.png';
import India from '../../assets/flags/ind.png';
import Bangladesh from '../../assets/flags/ban.png';
import Afghanistan from '../../assets/flags/afg.png';
import SouthAfrica from '../../assets/flags/sa.png';
import AshGardner from '../../assets/player image/Ash Gardner.png';
import ShashwatRawat from '../../assets/player image/Shashwat Rawat.png';
import AsgharAfghan from '../../assets/player image/Asghar_Afghan.png';

const LiveScores = () => {
  const [liveScores, setLiveScores] = useState([
    {
      id: 1,
      tournament: 'New Zealand Women tour of Australia, 2024',
      match: '2nd T20I',
      teams: [
        { name: 'AUS-W', score: '142/10 (19.3)', flag: Australia, totalRuns: 142, wickets: 10, overs: 19.3 },
        { name: 'NZ-W', score: '113/7 (20.0)', flag: NewZealand, totalRuns: 113, wickets: 7, overs: 20.0 },
      ],
      venue: 'Mackay',
      result: 'AUS-W Won By 29 runs',
      playerOfTheMatch: { name: 'Ash Gardner', image: AshGardner },
    },
    {
      id: 2,
      tournament: 'Duleep Trophy, 2024',
      match: 'Match 6',
      teams: [
        { name: 'IND', score: '297/10 & 286/8 d', flag: India, totalRuns: 297, wickets: 10, overs: 50 },
        { name: 'BAN', score: '234/10 & 217/10', flag: Bangladesh, totalRuns: 234, wickets: 10, overs: 50 },
      ],
      venue: 'Anantapur',
      result: 'IND Won By 132 runs',
      playerOfTheMatch: { name: 'Shashwat Rawat', image: ShashwatRawat },
    },
    {
      id: 3,
      tournament: 'Duleep Trophy, 2024',
      match: 'Match 5',
      teams: [
        { name: 'AFG', score: '349/10 & 305/10', flag: Afghanistan, totalRuns: 349, wickets: 10, overs: 50 },
        { name: 'SA', score: '282/10 & 115/10', flag: SouthAfrica, totalRuns: 282, wickets: 10, overs: 50 },
      ],
      venue: 'Anantapur',
      result: 'AFG Won By 257 runs',
      playerOfTheMatch: { name: 'Asghar Afghan', image: AsgharAfghan },
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Randomly generate new scores for the teams
  const generateRandomScore = (team) => {
    let newRuns = team.totalRuns + Math.floor(Math.random() * 7); // Add up to 6 runs
    let newWickets = team.wickets + (Math.random() < 0.1 ? 1 : 0); // 10% chance of losing a wicket
    let newOvers = Math.min(team.overs + 0.1, 20.0).toFixed(1); // Add overs, capped at 20.0 for T20

    if (newWickets >= 10) newWickets = 10; // Cap wickets at 10
    return {
      ...team,
      totalRuns: newRuns,
      wickets: newWickets,
      overs: parseFloat(newOvers),
      score: `${newRuns}/${newWickets} (${newOvers})`,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScores((prevScores) =>
        prevScores.map((match) => ({
          ...match,
          teams: match.teams.map(generateRandomScore), // Update each team's score
        }))
      );
    }, 500000); // Update scores every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? liveScores.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % liveScores.length);
  };

  return (
    <section className="py-4 bg-black text-white">
      <div className="container mx-auto px-2">
        <h2 className="text-xl font-semibold text-center mb-4">Live Scores</h2>
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex overflow-x-auto snap-x snap-mandatory w-full">
            {liveScores.map((score, index) => (
              <div
                key={score.id}
                className={`flex-shrink-0 snap-center w-full md:w-1/3 px-2 ${activeIndex === index ? 'opacity-100' : 'opacity-50'
                  } transition-opacity duration-500`}
              >
                <div className="bg-white rounded-lg p-3 shadow-lg text-black">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-semibold">{score.tournament}</h3>
                    <span className="text-gray-600 text-xs">{score.match}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    {score.teams.map((team, teamIndex) => (
                      <div key={teamIndex} className="flex items-center space-x-2">
                        <img src={team.flag} alt={team.name} className="w-8 h-5 rounded" />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{team.name}</span>
                          <span className="text-gray-600 text-xs text-center">{team.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600 text-xs">{score.venue}</span>
                    <span className="text-sm font-medium">{score.result}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <img src={score.playerOfTheMatch.image} alt={score.playerOfTheMatch.name} className="w-8 h-8 rounded-full" />
                    <div className="flex items-center space-x-1">
                      <img src={score.teams[0].flag} alt="Country Flag" className="w-6 h-4 rounded" />
                      <span className="text-sm font-medium">{score.playerOfTheMatch.name}</span>
                    </div>
                    <span className="text-xs text-gray-600">Player of the match</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveScores;