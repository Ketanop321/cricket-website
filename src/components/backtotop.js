import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button when scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
