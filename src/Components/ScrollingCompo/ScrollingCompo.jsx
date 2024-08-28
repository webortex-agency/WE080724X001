import React from "react";
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import scrollingCompoImg1 from "../../assets/ScrollingCompo/1.svg";
import scrollingCompoImg2 from "../../assets/ScrollingCompo/2.svg";
import scrollingCompoImg3 from "../../assets/ScrollingCompo/3.svg";
import scrollingCompoImg4 from "../../assets/ScrollingCompo/4.svg";
import scrollingCompoImg5 from "../../assets/ScrollingCompo/5.svg";
import scrollingCompoImg6 from "../../assets/ScrollingCompo/6.svg";
import scrollingCompoImg7 from "../../assets/ScrollingCompo/7.svg";
import scrollingCompoImg8 from "../../assets/ScrollingCompo/8.svg";
import scrollingCompoImg9 from "../../assets/ScrollingCompo/9.svg";
import scrollingCompoImg10 from "../../assets/ScrollingCompo/10.svg";
import scrollingCompoImg11 from "../../assets/ScrollingCompo/11.svg";
import scrollingCompoImg12 from "../../assets/ScrollingCompo/12.svg";
import scrollingCompoImg13 from "../../assets/ScrollingCompo/13.svg";
import scrollingCompoImg14 from "../../assets/ScrollingCompo/14.svg";
import scrollingCompoImg15 from "../../assets/ScrollingCompo/15.svg";
import scrollingCompoImg16 from "../../assets/ScrollingCompo/16.svg";
import scrollingCompoImg17 from "../../assets/ScrollingCompo/17.svg";

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
    <Box className="relative w-full h-48 overflow-hidden flex justify-center items-center">
      <Box className="absolute left-0 h-full w-40 bg-gradient-to-r from-backgroundColor z-10" />
      <Box className="absolute right-0 h-full w-40 bg-gradient-to-l from-backgroundColor z-10" />

      <ScrollingContainer>
        <AnimatedMarquee>
          {/* 1st Iteration */}

          <Box
            component="img"
            src={scrollingCompoImg1}
            alt="Component 01"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg2}
            alt="Component 02"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg3}
            alt="Component 03"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg4}
            alt="Component 04"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg5}
            alt="Component 05"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg6}
            alt="Component 06"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg7}
            alt="Component 07"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg8}
            alt="Component 08"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg9}
            alt="Component 09"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg10}
            alt="Component 10"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg11}
            alt="Component 11"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg12}
            alt="Component 12"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg13}
            alt="Component 13"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg14}
            alt="Component 14"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg15}
            alt="Component 15"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg16}
            alt="Component 16"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg17}
            alt="Component 17"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* 1st Iteration */}

          {/* 2nd Iteration */}

          <Box
            component="img"
            src={scrollingCompoImg1}
            alt="Component 01"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg2}
            alt="Component 02"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg3}
            alt="Component 03"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg4}
            alt="Component 04"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg5}
            alt="Component 05"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg6}
            alt="Component 06"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg7}
            alt="Component 07"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg8}
            alt="Component 08"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg9}
            alt="Component 09"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg10}
            alt="Component 10"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg11}
            alt="Component 11"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg12}
            alt="Component 12"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg13}
            alt="Component 13"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg14}
            alt="Component 14"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg15}
            alt="Component 15"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg16}
            alt="Component 16"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            component="img"
            src={scrollingCompoImg17}
            alt="Component 17"
            className="mx-3"
            sx={{
              height: "90px",
              width: "60px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          
          {/* 2nd Iteration */}
        </AnimatedMarquee>
      </ScrollingContainer>
    </Box>
  );
};

export default ScrollingCompo;
