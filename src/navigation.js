import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg'; // Import the logo image from your assets folder

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="CricketVerse Logo"
            className="h-12 w-12 rounded-full object-cover" // Make it circular with this class
          />
        </Link>
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
