import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const Marquee = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const images = [
  "./src/assets/clients/logo1.svg",
  "./src/assets/clients/Frame 427320620.svg",
  "./src/assets/clients/Frame 427320619.svg",
  "./src/assets/clients/Frame 427320621.svg",
  "./src/assets/clients/Frame 427320623.svg",
  "./src/assets/clients/Frame 427320624.svg",
  "./src/assets/clients/Frame 427320625.svg",
  "./src/assets/clients/Frame 427320626.svg",
  "./src/assets/clients/Frame 427320627.svg",
  "./src/assets/clients/Frame 427320628.svg",
  "./src/assets/clients/Frame 427320629.svg",
  "./src/assets/clients/Frame 427320630.svg",
  "./src/assets/clients/Frame 427320631.svg",
  
  
];

const ClientsCompo = () => {
  return (
    <Box className="relative w-full my-5 pt-5 pb-10 overflow-hidden flex justify-center items-center">
      <ScrollingContainer className="self-center">
        <Marquee className="grid grid-cols-7 md:grid-cols-none md:grid-flow-col">
          {images.map((src, index) => (
            <Box
              key={`image-${index}`}
              component="img"
              src={src}
              alt={`Image ${index}`}
              className="me-1 my-2 w-16 h-12 sm:w-24 sm:h-20 md:w-14 md:h-12 lg:w-20 lg:h-16 xl:w-24 xl:h-20"
              sx={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          ))}
        </Marquee>
      </ScrollingContainer>
    </Box>
  );
};

export default ClientsCompo;
