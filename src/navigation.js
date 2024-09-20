import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CricketVerse</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/tournaments" className="hover:text-yellow-500">Tournaments</Link></li>
          <li><Link to="/teams" className="hover:text-yellow-500">Teams</Link></li>
          <li><Link to="/players" className="hover:text-yellow-500">Players</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
