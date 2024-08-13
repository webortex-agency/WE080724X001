import React from "react";
import HomePage from "../HomePage/HomePage";
import Services from "../Services/Services";
import ClientsCompo from "../ClientsCompo/ClientsCompo";
import Projects from "../Projects/Projects";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Team from "../Team/Team";

const LandingPage = () => {
  return (
    <>
      <HomePage />
      <Services />
      <ClientsCompo />
      <Projects />
      <Process />
      <Testimonials />
      <Team />
    </>
  );
};

export default LandingPage;
