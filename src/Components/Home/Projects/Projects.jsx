import React from "react";
import { Container, Box, Card, Typography } from "@mui/material";

const images = [
  "./src/assets/Projects/Graphic.gif",
  "./src/assets/Projects/motion.gif",
  "./src/assets/Projects/Interior.gif",
  "./src/assets/Projects/WEB.gif",
  "./src/assets/Projects/Photography.gif",
  "./src/assets/Projects/Digital.gif",
  "./src/assets/Projects/2d.gif",
  "./src/assets/Projects/3d.gif",
];

const Projects = () => {
  return (
    <Container
      maxWidth="lg"
      className="w-full h-auto gap-14 flex flex-col p-5 bg-[#171717] box-border mt-10 mb-16"
    >
      <Typography className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-headColor font-poppins font-semibold">
        Projects
      </Typography>
      <Box className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5">
        {images.map((image, index) => (
          <Card
            key={index}
            className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden"
          >
            <img
              src={image}
              alt={`Project ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
