import React from 'react';

const AdditionalTeamInfo = ({ team }) => {
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Additional Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* You can add more detailed info here */}
        <div>
          <p className="text-gray-600"><strong>Founded:</strong> {team.founded} </p> {/* Add more info here */}
          <p className="text-gray-600"><strong>Stadium:</strong> {team.stadium} </p>
        </div>
        
        <div>
          <p className="text-gray-600"><strong>Owner:</strong> {team.owner} </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalTeamInfo;
