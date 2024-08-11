import { Box, Container, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Container className="flex justify-center align-middle w-screen h-screen">
      <Typography variant="h1" className="text-rose-600 self-center">
        404 <span className="text-headColor">Page</span>
      </Typography>
    </Container>
  );
};

export default NotFound;
