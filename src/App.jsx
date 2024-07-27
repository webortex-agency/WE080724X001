import React from "react";
import Button from "@mui/material/Button";
import "@fontsource/poppins";

const App = () => {
  return (
    <>
      <div className="container font bg-black flex-row hover:shadow-colorShadow">
        <div className="text-white text-3xl">App</div>
        <p className="text-xl bg-orange-500 text-white">
          welcome back to development
        </p>
        <Button variant="contained" className="">
          Hello world
        </Button>
      </div>
    </>
  );
};

export default App;
