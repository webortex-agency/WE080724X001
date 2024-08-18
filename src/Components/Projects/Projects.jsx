import React from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Consumer } from "../Context/Context";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectsClick = (path) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <Consumer>
      {(value) => {
        const { projectsData } = value;
        return (
          <Container
            maxWidth="lg"
            className="w-full h-auto gap-14 flex flex-col p-5 bg-[#171717] box-border mt-10 mb-16"
            id="projects"
          >
            <Typography className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-headColor font-poppins font-semibold">
              Projects
            </Typography>
            <Box className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5">
              {projectsData.map((projectData) => (
                <Card
                  key={projectData.id}
                  className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={handleProjectsClick(projectData.path)}
                >
                  <video
                    src={projectData.src}
                    alt={`Project ${projectData.id}`}
                    className="w-full h-full object-cover rounded-lg"
                    playsInline
                    autoPlay
                    loop
                    muted
                  />
                </Card>
              ))}
            </Box>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default Projects;
