import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navigation';
import HomePage from './homepage';
import TournamentPage from './tournament';
import Footer from './footer'
import ExploreTournaments from './exploretournaments'
import ContactUs from './contactus';
import LearnMorePage from './LearnMorePage';
import RegisterPage from './RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<TournamentPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/exploretournaments' element={<ExploreTournaments/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
