import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get Ready for the Ultimate Cricket Experience!</h2>
        <p className="text-lg text-white mb-8">
          Don't miss out on the action. Join our upcoming tournaments, showcase your talent, and compete with the best teams.
        </p>
        <Link to="/tournaments">
          <button className="bg-white text-yellow-500 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Register for a Tournament
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
