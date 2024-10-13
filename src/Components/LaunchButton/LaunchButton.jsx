import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LaunchButton = ({ onLaunch }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reset visibility to true when the component mounts (on each page load/refresh)
    setIsVisible(true);

    // Optionally, you can add a small delay to ensure the button appears after the page content
    // const timer = setTimeout(() => setIsVisible(true), 100);
    // return () => clearTimeout(timer);
  }, []);

  const handleLaunch = () => {
    setIsVisible(false);
    onLaunch();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <button
        onClick={handleLaunch}
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105"
      >
        Launch Website
      </button>
    </div>
  );
};

LaunchButton.propTypes = {
  onLaunch: PropTypes.func.isRequired,
};

export default LaunchButton;
