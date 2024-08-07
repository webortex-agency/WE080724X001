import React from "react";
import "@fontsource/poppins";
import Navbar from "./Components/Navabar/Navbar";
import Home from "./Components/Home/Home";
import Process from "./Components/Process/Process";

const App = () => {
  return (
    <>
      <Process />
      <Navbar />
      <Home />
    </>
  );
};

export default App;
