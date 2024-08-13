import React from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectsData = [
  {
    id: "project-01",
    src: "./src/assets/Projects/Graphic.webm",
    path: "/projects/graphic",
  },
  {
    id: "2",
    src: "./src/assets/Projects/Graphic Design.webm",
    path: "/projects/graphic-design",
  },
  {
    id: "3",
    src: "./src/assets/Projects/Interior Design.webm",
    path: "/projects/interior-design",
  },
  {
    id: "4",
    src: "./src/assets/Projects/WEb.webm",
    path: "/projects/web",
  },
  {
    id: "5",
    src: "./src/assets/Projects/Photography.webm",
    path: "/projects/photography",
  },
  {
    id: "6",
    src: "./src/assets/Projects/Digital market.mp4",
    path: "/projects/digital-market",
  },
  {
    id: "7",
    src: "./src/assets/Projects/2D animation.webm",
    path: "/projects/2d",
  },
  {
    id: "project-08",
    src: "./src/assets/Projects/3D.webm",
    path: "/projects/3d",
  },
];

const Projects = ({ cards = ProjectsData }) => {
  const navigate = useNavigate();

  const handleProjectsClick = (path) => {
    return () => {
      navigate(path);
    };
  };

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
        {cards.map((card) => (
          <Card
            key={card.id}
            className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={handleProjectsClick(card.path)}
          >
            <video
              src={card.src}
              alt={`Project ${card.id}`}
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
};

export default Projects;
