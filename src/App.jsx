import React from "react";
import "@fontsource/poppins";
import Navbar from "./Components/Navabar/Navbar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import Process from "./Components/Process/Process";
import Projects from "./Components/Home/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      <Process />
      {/* <Testimonials/> */}
      <Team />
      <Footer />
    </>
  );
};

export default App;
