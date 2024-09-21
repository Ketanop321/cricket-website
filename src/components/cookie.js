// CookieConsent.js
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Check if the user has already made a cookie decision
  useEffect(() => {
    const cookieDecision = localStorage.getItem('cookieDecision');
    if (!cookieDecision) {
      setShowDialog(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Store the user's acceptance in localStorage
    localStorage.setItem('cookieDecision', 'accepted');
    setShowDialog(false); // Hide the dialog
  };

  const handleDeclineCookies = () => {
    // Store the user's decline in localStorage
    localStorage.setItem('cookieDecision', 'declined');
    setShowDialog(false); // Hide the dialog
  };

  return (
    <>
      {showDialog && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-md z-50">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h4 className="text-lg font-semibold">We use cookies</h4>
              <p className="text-sm">
                This website uses cookies to ensure you get the best experience. By clicking "Accept All", you consent to our use of cookies. You can also decline cookies.
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleAcceptCookies}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Accept All
              </button>
              <button
                onClick={handleDeclineCookies}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
