import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tournaments = [
  {
    id: 1,
    name: 'T20 Championship',
    date: 'October 2024',
    format: 'T20',
    location: 'XYZ Stadium',
    teams: ['Team A', 'Team B'],
    prizePool: '$500,000',
  },
  {
    id: 2,
    name: 'One Day Series',
    date: 'November 2024',
    format: 'One Day',
    location: 'ABC Grounds',
    teams: ['Team C', 'Team D'],
    prizePool: '$750,000',
  },
  {
    id: 3,
    name: 'Test Match League',
    date: 'December 2024',
    format: 'Test',
    location: 'DEF Cricket Field',
    teams: ['Team E', 'Team F'],
    prizePool: '$1,000,000',
  },
];

// Filter function
const filterTournaments = (tournaments, filter) => {
  if (filter === 'none') return tournaments;
  return tournaments.filter((tournament) => tournament.format === filter);
};

const TournamentPage = () => {
  const [filter, setFilter] = useState('none');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', team: '', role: '' });
  const [step, setStep] = useState(1); // To track registration stages

  // Handle opening the registration form modal
  const handleRegisterClick = (tournament) => {
    setSelectedTournament(tournament);
    setIsModalOpen(true);
    setStep(1); // Reset to first step
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully registered for ${selectedTournament.name}!`);
    setFormData({ name: '', email: '', team: '', role: '' }); // Clear form data
    setIsModalOpen(false); // Close the modal
  };

  const nextStep = () => setStep(step + 1); // Move to next step
  const prevStep = () => setStep(step - 1); // Move to previous step

  const sortedTournaments = filterTournaments(tournaments, filter);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Tournaments</h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore all available tournaments and join the cricket excitement!
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-4 text-center">
          <label htmlFor="filter" className="text-lg font-semibold mr-2">
            Filter by Format:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="none">All Formats</option>
            <option value="T20">T20</option>
            <option value="One Day">One Day</option>
            <option value="Test">Test</option>
          </select>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {sortedTournaments.map((tournament) => (
            <div key={tournament.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p>{tournament.date}</p>
              </div>
              <div className="p-4">
                <p>
                  <span className="font-semibold">Format:</span> {tournament.format}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {tournament.location}
                </p>
                <p>
                  <span className="font-semibold">Teams:</span> {tournament.teams.join(', ')}
                </p>
                <p>
                  <span className="font-semibold">Prize Pool:</span> {tournament.prizePool}
                </p>

                {/* View Details Button */}
                <Link to={`/tournaments/${tournament.id}`}>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </Link>

                {/* Register Button */}
                <button
                  onClick={() => handleRegisterClick(tournament)}
                  className="mt-4 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for registration form */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-semibold mb-4">
                Register for {selectedTournament.name}
              </h3>

              {/* Multi-Step Registration Form */}
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="name">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="team">
                        Select Team:
                      </label>
                      <select
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                      >
                        <option value="">Select a Team</option>
                        {selectedTournament.teams.map((team, index) => (
                          <option key={index} value={team}>
                            {team}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="role">
                        Player Role:
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        placeholder="e.g., Batsman, Bowler"
                        required
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Review Your Registration:</h4>
                    <p>
                      <span className="font-semibold">Name:</span> {formData.name}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> {formData.email}
                    </p>
                    <p>
                      <span className="font-semibold">Team:</span> {formData.team}
                    </p>
                    <p>
                      <span className="font-semibold">Role:</span> {formData.role}
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TournamentPage;
