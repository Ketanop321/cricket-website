import React from 'react';
import { useLocation } from 'react-router-dom';

const LearnMorePage = () => {
  const location = useLocation();
  const { tournament } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">{tournament?.name}</h1>
      <p className="text-gray-600 text-center mb-4"><strong>Date:</strong> {tournament?.date}</p>
      <p className="text-gray-600 text-center mb-4"><strong>Format:</strong> {tournament?.format}</p>
      <p className="text-gray-600 text-center mb-4"><strong>Location:</strong> {tournament?.location}</p>
      <p className="text-gray-700 text-center mb-8">{tournament?.description}</p>
    </div>
  );
};

export default LearnMorePage;
