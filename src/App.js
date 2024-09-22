import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation';
import HomePage from './homepage';
import TournamentPage from './tournament';
import Footer from './footer';
import ContactUs from './contactus';
import LearnMorePage from './LearnMorePage';
import LiveScore from './livescore';
import PlayerPage from './player';
import TeamPage from './teampage';
import Preloader from './components/preloader'; // Import the preloader component
import TournamentDetailPage from './TournamentDetailPage'; // New page for tournament details
import TeamDetails from './teamDetails';  // Page for individual team details

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
