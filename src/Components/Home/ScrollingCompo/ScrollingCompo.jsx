import React from "react";
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframes for the scrolling animation
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

// Styled component for the scrolling container
const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  animation: `${scroll} 35s linear infinite`,
}));

const images = [
  "src/assets/ScrollingCompo/figma.png",
  "src/assets/ScrollingCompo/framer.png",
  "src/assets/ScrollingCompo/spline3d.png",
  "src/assets/ScrollingCompo/blender.png",
  "src/assets/ScrollingCompo/photoshop.png",
  "src/assets/ScrollingCompo/illustrator.png",
  "src/assets/ScrollingCompo/premierpro.png",
  "src/assets/ScrollingCompo/aftereffects.png",
  "src/assets/ScrollingCompo/animator.png",
  "src/assets/ScrollingCompo/jitter.png",
  "src/assets/ScrollingCompo/unrealengine.png",
  "src/assets/ScrollingCompo/maya.png",
  "src/assets/ScrollingCompo/lottie.png",
  "src/assets/ScrollingCompo/unity.png",
  "src/assets/ScrollingCompo/modyfi.png",
  "src/assets/ScrollingCompo/sketchup.png",
  "src/assets/ScrollingCompo/zbrush.png",
];

const ScrollingCompo = () => {
  return (
    <Box className="relative w-full h-64 overflow-hidden flex justify-center">
      <ScrollingContainer className="absolute w-max self-center">
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Image ${index + 1}`}
            className="h-full m-2"
          />
        ))}
        {images.map((src, index) => (
          <Box
            key={index + images.length}
            component="img"
            src={src}
            alt={`Image ${index + 1}`}
            className="h-full m-2"
          />
        ))}
      </ScrollingContainer>
    </Box>
  );
};

export default ScrollingCompo;
