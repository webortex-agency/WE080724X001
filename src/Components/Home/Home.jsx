import React from "react";
import HomePage from "./HomePage/HomePage";
import Services from "./Services/Services";
import ClientsCompo from "../ClientsCompo/ClientsCompo";

const Home = () => {
  return (
    <>
      <HomePage />
      <Services />
      <ClientsCompo />
    </>
  );
};

export default Home;
