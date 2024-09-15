import React, { useState } from 'react';

const RegistrationForm = ({ onClose }) => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tournament: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1); // Go to the previous step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true); // Mark form as submitted
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Conditionally render either form or success message */}
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Register for Tournament</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Tournament Selection */}
              {step === 2 && (
                <div>
                  <div className="mb-4">
                    <label htmlFor="tournament" className="block text-gray-700">Tournament</label>
                    <select
                      id="tournament"
                      name="tournament"
                      value={formData.tournament}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded"
                      required
                    >
                      <option value="">Select a tournament</option>
                      <option value="T20 Championship">T20 Championship</option>
                      <option value="One Day Cup">One Day Cup</option>
                      <option value="Test Series">Test Series</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-semibold">Confirm Your Details</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Tournament:</strong> {formData.tournament}</p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
                  >
                    Previous
                  </button>
                )}

                {step < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
                  >
                    Next
                  </button>
                )}

                {step === 3 && (
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                )}
              </div>

              {/* Close Button */}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </form>
          </>
        ) : (
          // Success message after form submission
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Registration Successful!</h2>
            <p className="mb-6">Thank you for registering for the tournament. We'll contact you soon with more details.</p>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
