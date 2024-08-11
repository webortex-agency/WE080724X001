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
