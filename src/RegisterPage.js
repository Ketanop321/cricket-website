import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Register for the Tournament</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="tel" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your phone number" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Team Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your team name" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
