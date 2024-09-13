import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navigation';
import HomePage from './homepage';
import TournamentPage from './tournament';
import Footer from './footer'
import ContactUs from './contactus';
import LearnMorePage from './LearnMorePage';
import RegisterPage from './RegisterPage';
import LiveScore from './livescore';
import PlayerPage from './player';
import TeamPage from './teampage';

function App() {
  return (
    <Router>
      <div>
        <LiveScore/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<TournamentPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/players' element={<PlayerPage/>} />
          <Route path='/teams' element={<TeamPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
