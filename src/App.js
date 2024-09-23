import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './features/home/navigation';
import HomePage from './features/home/homepage';
import TournamentPage from './features/tournament/tournament';
import Footer from './features/home/footer';
import ContactUs from './features/contact/contactus';
import LearnMorePage from './features/home/LearnMorePage';
import LiveScore from './features/home/livescore';
import PlayerPage from './features/player/player';
import TeamPage from './features/team/teampage';
import Preloader from './components/preloader'; // Import the preloader component
import TournamentDetailPage from './features/tournament/TournamentDetailPage'; // New page for tournament details
import TeamDetails from './features/team/teamDetails';  // Page for individual team details

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);
  }, []);

  if (loading) {
    return <Preloader />; // Show the preloader while loading is true
  }

  return (
    <Router>
      <div>
        <LiveScore />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<TournamentPage />} />
          <Route path="/tournaments/:id" element={<TournamentDetailPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/players" element={<PlayerPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
