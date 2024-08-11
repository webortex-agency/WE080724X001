import React, { useState } from "react";
import "@fontsource/poppins";
import Navbar from "./Components/Navabar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    )
  );
};

export default App;
