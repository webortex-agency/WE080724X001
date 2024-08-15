import React from "react";
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { Consumer } from "../Context/Context";

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

const ScrollingCompo = () => {
  return (
    <Consumer>
      {(value) => {
        const { scrollingComponents } = value;
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
      }}
    </Consumer>
  );
};

export default ScrollingCompo;
