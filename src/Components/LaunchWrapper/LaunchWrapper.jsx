import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import preLoader from "../../assets/MainLogo.webm";
import "../LaunchWrapper/LaunchWrapper.css";

const LaunchButton = ({ onLaunch }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <button
      onClick={onLaunch}
      className="px-6 py-3 text-lg font-semibold text-white bg-transparent border-white border-[1px] rounded-lg shadow-lg hover:bg-white hover:text-backgroundColor focus:outline-none transform transition-transform duration-400 hover:scale-105"
    >
      Launch Website
    </button>
  </div>
);

const Preloader = () => (
  <div className="spinner" id="spinner">
    <video autoPlay muted loop src={preLoader} />
  </div>
);

const LaunchWrapper = ({ children }) => {
  const [showLaunchButton, setShowLaunchButton] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowLaunchButton(true);
    setShowPreloader(false);
    setShowContent(false);
  }, []);

  const handleLaunch = () => {
    setShowLaunchButton(false);
    setShowPreloader(true);

    setTimeout(() => {
      setShowPreloader(false);
      setShowContent(true);
    }, 2000);
  };

  return (
    <>
      {showLaunchButton && <LaunchButton onLaunch={handleLaunch} />}
      {showPreloader && <Preloader />}
      {showContent && children}
    </>
  );
};

LaunchWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LaunchWrapper;
