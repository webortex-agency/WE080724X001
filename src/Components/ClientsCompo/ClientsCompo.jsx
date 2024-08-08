import React from "react";
import { Box, Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const Marquee = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const images = [
  "src/assets/clients/A-logo-01.png",
  "src/assets/clients/AB-01-01.png",
  "src/assets/clients/Analognxt-0012-01-01.png",
  "src/assets/clients/beats_logo_wth_out_bg2.png",
  "src/assets/clients/Elite-Power-logo-01.png",
  "src/assets/clients/Final-for-proprietor.jpg",
  "src/assets/clients/Healthy-01.png",
  "src/assets/clients/Lavish-01.png",
  "src/assets/clients/logo-final-001-01.png",
  "src/assets/clients/Logo-TO.jpg",
  "src/assets/clients/tendel-with-font-01.png",
  "src/assets/clients/TRENDEL-Text.png",
  "src/assets/clients/well-health-1.png",
];

const ClientsCompo = () => {
  return (
    <Container className="relative w-full h-48 overflow-hidden flex justify-center items-center">
      <Box className="absolute left-0 h-full w-40 bg-gradient-to-r from-backgroundColor z-10" />
      <Box className="absolute right-0 h-full w-40 bg-gradient-to-l from-backgroundColor z-10" />

      <ScrollingContainer>
        <Marquee>
          {images.map((src, index) => (
            <Box
              key={`image-${index}`}
              component="img"
              src={src}
              alt={`Image ${index}`}
              className="mx-3 w-40 h-auto"
              sx={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          ))}
        </Marquee>
      </ScrollingContainer>
    </Container>
  );
};

export default ClientsCompo;
