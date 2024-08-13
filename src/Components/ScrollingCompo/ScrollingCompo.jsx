import React from "react";
import { Box, Container } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const scrollX = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const AnimatedMarquee = styled(Box)(({ theme }) => ({
  display: "flex",
  animation: `${scrollX} 30s linear infinite`,
  transition: ".3s ease",
}));

const images = [
  "src/assets/ScrollingCompo/1.svg",
  "src/assets/ScrollingCompo/2.svg",
  "src/assets/ScrollingCompo/3.svg",
  "src/assets/ScrollingCompo/4.svg",
  "src/assets/ScrollingCompo/5.svg",
  "src/assets/ScrollingCompo/6.svg",
  "src/assets/ScrollingCompo/7.svg",
  "src/assets/ScrollingCompo/8.svg",
  "src/assets/ScrollingCompo/9.svg",
  "src/assets/ScrollingCompo/10.svg",
  "src/assets/ScrollingCompo/11.svg",
  "src/assets/ScrollingCompo/12.svg",
  "src/assets/ScrollingCompo/13.svg",
  "src/assets/ScrollingCompo/14.svg",
  "src/assets/ScrollingCompo/15.svg",
  "src/assets/ScrollingCompo/16.svg",
  "src/assets/ScrollingCompo/17.svg",
];

const ScrollingCompo = () => {
  return (
    <Box className="relative w-full h-48 overflow-hidden flex justify-center items-center">
      <Box className="absolute left-0 h-full w-40 bg-gradient-to-r from-backgroundColor z-10" />
      <Box className="absolute right-0 h-full w-40 bg-gradient-to-l from-backgroundColor z-10" />

      <ScrollingContainer>
        <AnimatedMarquee>
          {images.map((src, index) => (
            <Box
              key={`image-${index}`}
              component="img"
              src={src}
              alt={`Image ${index}`}
              className="mx-3"
              sx={{
                height: "90px",
                width: "60px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          ))}
          {images.map((src, index) => (
            <Box
              key={`image-duplicate-${index}`}
              component="img"
              src={src}
              alt={`Image ${index + 1}`}
              className="mx-3"
              sx={{
                height: "90px",
                width: "60px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          ))}
        </AnimatedMarquee>
      </ScrollingContainer>
    </Box>
  );
};

export default ScrollingCompo;
