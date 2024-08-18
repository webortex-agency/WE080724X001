import React from "react";
import { useMediaQuery } from '@mui/material';
import HomePage from "../HomePage/HomePage";
import Services from "../Services/Services";
import ClientsCompo from "../ClientsCompo/ClientsCompo";
import Projects from "../Projects/Projects";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Team from "../Team/Team";
import TeamMobile from "../Team/TeamMobile";

const LandingPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <HomePage />
      <Services />
      <ClientsCompo />
      <Projects />
      <Process />
      <Testimonials />
      {isMobile ? <TeamMobile/> : <Team/>}
    </>
  );
};

export default LandingPage;
