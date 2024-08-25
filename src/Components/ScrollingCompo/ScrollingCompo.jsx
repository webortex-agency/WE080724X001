import React from "react";
import { Box } from "@mui/material";
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

const scrollingComponents = [
  {
    id: 1,
    src: "./src/assets/ScrollingCompo/1.svg",
  },
  {
    id: 2,
    src: "src/assets/ScrollingCompo/2.svg",
  },
  {
    id: 3,
    src: "src/assets/ScrollingCompo/3.svg",
  },
  {
    id: 4,
    src: "src/assets/ScrollingCompo/4.svg",
  },
  {
    id: 5,
    src: "src/assets/ScrollingCompo/5.svg",
  },
  {
    id: 6,
    src: "src/assets/ScrollingCompo/6.svg",
  },
  {
    id: 7,
    src: "src/assets/ScrollingCompo/7.svg",
  },
  {
    id: 8,
    src: "src/assets/ScrollingCompo/8.svg",
  },
  {
    id: 9,
    src: "src/assets/ScrollingCompo/9.svg",
  },
  {
    id: 10,
    src: "src/assets/ScrollingCompo/10.svg",
  },
  {
    id: 11,
    src: "src/assets/ScrollingCompo/11.svg",
  },
  {
    id: 12,
    src: "src/assets/ScrollingCompo/12.svg",
  },
  {
    id: 13,
    src: "src/assets/ScrollingCompo/13.svg",
  },
  {
    id: 14,
    src: "src/assets/ScrollingCompo/14.svg",
  },
  {
    id: 15,
    src: "src/assets/ScrollingCompo/15.svg",
  },
  {
    id: 16,
    src: "src/assets/ScrollingCompo/16.svg",
  },
  {
    id: 17,
    src: "src/assets/ScrollingCompo/17.svg",
  },
];

const ScrollingCompo = () => {
  return (
    <Box className="relative w-full h-48 overflow-hidden flex justify-center items-center">
      <Box className="absolute left-0 h-full w-40 bg-gradient-to-r from-backgroundColor z-10" />
      <Box className="absolute right-0 h-full w-40 bg-gradient-to-l from-backgroundColor z-10" />

      <ScrollingContainer>
        <AnimatedMarquee>
          {scrollingComponents.map((scrollingComponent) => (
            <Box
              key={`scrollingComponent-${scrollingComponent.id}`}
              component="img"
              src={scrollingComponent.src}
              alt={`scrollingComponent ${scrollingComponent.id}`}
              className="mx-3"
              sx={{
                height: "90px",
                width: "60px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          ))}
          {scrollingComponents.map((scrollingComponent) => (
            <Box
              key={`scrollingComponent-duplicate-${scrollingComponent.id}`}
              component="img"
              src={scrollingComponent.src}
              alt={`scrollingComponent ${scrollingComponent.id + "logo"}`}
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
