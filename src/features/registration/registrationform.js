import React, { useState } from 'react';

const RegistrationForm = ({ onClose }) => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tournament: '',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Form field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation logic
  const validateStep = () => {
    let stepErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) stepErrors.name = 'Name is required';
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        stepErrors.email = 'Valid email is required';
      }
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
        stepErrors.phone = 'Valid 10-digit phone number is required';
      }
    } else if (step === 2) {
      if (!formData.tournament) stepErrors.tournament = 'Please select a tournament';
    } else if (step === 3) {
      if (!formData.paymentMethod) stepErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Handle next button click with validation
  const handleNext = () => {
    if (validateStep()) setStep((prevStep) => prevStep + 1); // Go to the next step if valid
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1); // Go to the previous step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true); // Mark form as submitted
      setShowConfirmationModal(true); // Show confirmation modal
    }
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
                      className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 block w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                      className={`mt-1 block w-full p-2 border ${errors.tournament ? 'border-red-500' : 'border-gray-300'} rounded`}
                      required
                    >
                      <option value="">Select a tournament</option>
                      <option value="T20 Championship">T20 Championship</option>
                      <option value="One Day Cup">One Day Cup</option>
                      <option value="Test Series">Test Series</option>
                    </select>
                    {errors.tournament && <p className="text-red-500 text-sm">{errors.tournament}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <div>
                  <div className="mb-4">
                    <label htmlFor="paymentMethod" className="block text-gray-700">Payment Method</label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      className={`mt-1 block w-full p-2 border ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'} rounded`}
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="Net Banking">Net Banking</option>
                    </select>
                    {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div>
                  <h3 className="text-xl font-semibold">Confirm Your Details</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p ><strong>Tournament:</strong> {formData.tournament}</p>
                  <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
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

                {step < 4 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
                  >
                    Next
                  </button>
                )}

                {step === 4 && (
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
          // Confirmation modal
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Registration Successful!</h2>
            <p className="mb-6">Thank you for registering for the tournament. We look forward to your participation.</p>
            <div className="flex justify-center">
              <div className="cricket-ball" />
              <div className="stumps" />
            </div>
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg"
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