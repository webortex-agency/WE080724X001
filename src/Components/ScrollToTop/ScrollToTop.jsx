import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      
      if (scrolled > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box
        className={`fixed right-6 bottom-6 z-[9999] bg-navlinkActiveColor w-12 h-12 p-auto rounded-full flex align-middle justify-center cursor-pointer transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onClick={scrollToTop}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <ArrowUpwardIcon className="text-headColor self-center" />
      </Box>
    </>
  );
};

export default ScrollToTop;