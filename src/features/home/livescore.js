import React, { useState, useEffect } from 'react';

const LiveScores = () => {
  const [liveScores, setLiveScores] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const API_KEY = process.env.REACT_APP_CRIC_API_KEY;

  // Function to fetch live scores from CricAPI
  const fetchLiveScores = async () => {
    try {
      const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`);
      const data = await response.json();
  
      console.log(data); // Log to inspect the response structure
  
      if (data.status === "success") {
        setLiveScores(data.data);
      } else {
        console.error('Error fetching live scores:', data.message);
      }
    } catch (error) {
      console.error('Error fetching live scores:', error);
    }
  };
  

  useEffect(() => {
    fetchLiveScores();
    const interval = setInterval(fetchLiveScores, 60000);
    return () => clearInterval(interval);
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
    <section className="py-8 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Live Scores</h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-black opacity-75 hover:opacity-100 focus:outline-none transition-opacity duration-300"
          >
            &#10094;
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {liveScores.map((match, index) => (
                <div
                  key={match.id}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{match.name}</h3>
                      <span className="text-gray-600 text-sm">{match.status}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      {match.teams.map((team, teamIndex) => (
                        <div key={teamIndex} className="flex items-center space-x-4">
                          <img src={team.logo} alt={team.name} className="w-12 h-12 rounded-full object-cover" />
                          <div className="flex flex-col">
                            <span className="text-lg font-medium">{team.name}</span>
                            <span className="text-gray-600 text-base">{team.score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 text-sm">{match.venue}</span>
                      <span className="text-lg font-medium">{match.result}</span>
                    </div>
                    {match.bestPlayer && (
                      <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
                        <img src={match.bestPlayer.photo} alt={match.bestPlayer.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <span className="text-lg font-medium block">{match.bestPlayer.name}</span>
                          <span className="text-sm text-gray-600">Player of the match</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-black opacity-75 hover:opacity-100 focus:outline-none transition-opacity duration-300"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveScores;