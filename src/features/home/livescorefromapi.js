
//This code will fetch the live data of cricket but the drawback of this api is it is limited and image are not in api




// import React, { useState, useEffect } from 'react';
// import Australia from '../../assets/flags/aus.png';
// import NewZealand from '../../assets/flags/nz.png';
// import India from '../../assets/flags/ind.png';
// import Bangladesh from '../../assets/flags/ban.png';
// import Afghanistan from '../../assets/flags/afg.png';
// import SouthAfrica from '../../assets/flags/sa.png';
// import AshGardner from '../../assets/player image/Ash Gardner.png';
// import ShashwatRawat from '../../assets/player image/Shashwat Rawat.png';
// import AsgharAfghan from '../../assets/player image/Asghar_Afghan.png';

// const LiveScores = () => {
//   const [liveScores, setLiveScores] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // API Fetch function
//   const fetchLiveScores = async () => {
//     try {
//       const response = await fetch(`https://api.cricapi.com/v1/matches?apikey= dm me for api key`);
//       const data = await response.json();
  
//       console.log("API Response:", data);
  
//       if (data && data.data) {
//         const matches = data.data.map(match => ({
//           id: match.id,
//           tournament: match.series_name,
//           match: match.name,
//           teams: [
//             { 
//               name: match.teams ? match.teams[0] : 'Unknown Team',
//               score: match.score && match.score[0] 
//                 ? `${match.score[0].r}/${match.score[0].w} (${match.score[0].o})`
//                 : 'N/A',
//               flag: getFlag(match.teams ? match.teams[0] : '')
//             },
//             { 
//               name: match.teams ? match.teams[1] : 'Unknown Team',
//               score: match.score && match.score[1] 
//                 ? `${match.score[1].r}/${match.score[1].w} (${match.score[1].o})`
//                 : 'N/A',
//               flag: getFlag(match.teams ? match.teams[1] : '')
//             }
//           ],
//           venue: match.venue || 'Venue Unknown',
//           result: match.status || 'Status Unknown',
//           playerOfTheMatch: { 
//             name: match.playerOfTheMatch?.name || 'N/A', 
//             image: getPlayerImage(match.playerOfTheMatch?.name || '')
//           }
//         }));
//         setLiveScores(matches);
//       } else {
//         console.error("No matches data available in response:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching live scores:", error);
//     }
//   };

//   // Get appropriate flag image for each team
//   const getFlag = (teamName) => {
//     switch(teamName.toUpperCase()) {
//       case 'AUSTRALIA': case 'AUS': case 'AUS-W': return Australia;
//       case 'NEW ZEALAND': case 'NZ': case 'NZ-W': return NewZealand;
//       case 'INDIA': case 'IND': return India;
//       case 'BANGLADESH': case 'BAN': return Bangladesh;
//       case 'AFGHANISTAN': case 'AFG': return Afghanistan;
//       case 'SOUTH AFRICA': case 'SA': return SouthAfrica;
//       default: return ''; // Placeholder for teams without a set flag image
//     }
//   };

//   // Get appropriate player image for Player of the Match (for demo purposes)
//   const getPlayerImage = (playerName) => {
//     switch(playerName) {
//       case 'Ash Gardner': return AshGardner;
//       case 'Shashwat Rawat': return ShashwatRawat;
//       case 'Asghar Afghan': return AsgharAfghan;
//       default: return ''; // Placeholder if no image found
//     }
//   };

//   useEffect(() => {
//     fetchLiveScores();
//     const interval = setInterval(fetchLiveScores, 600000); // Update every 10 minutes
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? liveScores.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % liveScores.length);
//   };

//   return (
//     <section className="py-4 bg-black text-white">
//       <div className="container mx-auto px-2">
//         <h2 className="text-xl font-semibold text-center mb-4">Live Scores</h2>
//         <div className="relative flex items-center">
//           <button onClick={handlePrev} className="absolute left-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none">
//             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <div className="flex overflow-x-auto snap-x snap-mandatory w-full">
//             {liveScores.map((score, index) => (
//               <div key={score.id} className={`flex-shrink-0 snap-center w-full md:w-1/3 px-2 ${activeIndex === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-500`}>
//                 <div className="bg-white rounded-lg p-3 shadow-lg text-black">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-xs font-semibold">{score.tournament}</h3>
//                     <span className="text-gray-600 text-xs">{score.match}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     {score.teams.map((team, teamIndex) => (
//                       <div key={teamIndex} className="flex items-center space-x-2">
//                         {team.flag && <img src={team.flag} alt={team.name} className="w-8 h-5 rounded" />}
//                         <div className="flex flex-col">
//                           <span className="text-sm font-medium">{team.name}</span>
//                           <span className="text-gray-600 text-xs text-center">{team.score}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-gray-600 text-xs">{score.venue}</span>
//                     <span className="text-sm font-medium">{score.result}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 mt-2">
//                     {score.playerOfTheMatch.image && (
//                       <img src={score.playerOfTheMatch.image} alt={score.playerOfTheMatch.name} className="w-8 h-8 rounded-full" />
//                     )}
//                     <span className="text-sm font-medium">{score.playerOfTheMatch.name}</span>
//                     <span className="text-xs text-gray-600">Player of the match</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button onClick={handleNext} className="absolute right-0 z-10 p-2 rounded-full bg-gray-800 opacity-50 hover:opacity-80 focus:outline-none">
//             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LiveScores;