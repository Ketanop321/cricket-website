import React, { useState, useEffect } from 'react';

const LiveScores = () => {
  // Simulating live scores with state
  const [liveScores, setLiveScores] = useState([
    {
      match: 'Team A vs Team B',
      score: '120/5 in 15.2 Overs',
      venue: 'XYZ Stadium',
    },
    {
      match: 'Team C vs Team D',
      score: '140/3 in 18 Overs',
      venue: 'ABC Stadium',
    },
    {
      match: 'Team E vs Team F',
      score: '100/7 in 12 Overs',
      venue: 'DEF Stadium',
    },
  ]);

  // Simulate score updates (you could replace this with an API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScores((prevScores) =>
        prevScores.map((score) => ({
          ...score,
          score: updateScore(score.score), // Mock update function
        }))
      );
    }, 5000); // Updates every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Function to mock score update
  const updateScore = (currentScore) => {
    const runs = Math.floor(Math.random() * 6) + 1; // Random run between 1 and 6
    return `${parseInt(currentScore.split('/')[0]) + runs}/${currentScore.split('/')[1]}`;
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Live Scores</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {liveScores.map((score, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">{score.match}</h3>
            <p className="mt-2 text-lg">{score.score}</p>
            <p className="text-gray-600">{score.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveScores;
