import React from "react";
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

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
    <Box className="relative w-full h-48 overflow-hidden flex justify-center items-center">
      <Box className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-backgroundColor via-transparent to-transparent rounded-full z-10" />
      <Box className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-backgroundColor via-transparent to-transparent rounded-full z-10" />

      <ScrollingContainer className="absolute w-max ">
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
        {images.map((src, index) => (
          <Box
            key={`image-duplicate-${index + 2}`}
            component="img"
            src={src}
            alt={`Image ${index + 2}`}
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
            key={`image-duplicate-${index + 3}`}
            component="img"
            src={src}
            alt={`Image ${index + 3}`}
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ))}
      </ScrollingContainer>
    </Box>
  );
};

export default ScrollingCompo;
