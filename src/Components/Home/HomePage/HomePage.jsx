import React from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";
import coverImg from "../../../assets/cover.png";
import ScrollingCompo from "../ScrollingCompo/ScrollingCompo";

const HomePage = () => {
  return (
    <div className="h-screen m-0 p-0">
      <Box className="flex justify-center">
        <Container
          maxWidth="lg"
          className="self-center md:mt-24 lg:mt-48 py-10"
        >
          <Box className="" sx={{ alignSelf: "center" }}>
            <div className="flex md:flex-row flex-col-reverse justify-center gap-2 md:gap-4 px-10">
              <div className="grid-rows-12 md:grid-rows-6 self-center px-3">
                <Typography
                  variant="h2"
                  className="font-poppins text-headColor text-center md:text-left text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl md:pe-36  font-light"
                >
                  We Are Creative Designers
                </Typography>
                <Typography
                  variant="h6"
                  className="font-poppins text-textColor text-center md:text-left text-sm sm:text-base lg:text-lg mt-3 md:mt-4 lg:mt-7 font-normal"
                >
                  A manual for joining the 64 framez.
                  <br /> By Designers for builders.
                </Typography>
              </div>
              <div className="grid-rows-12 md:grid-rows-6 text-center self-center px-3 pt-6 md:pt-0">
                <Avatar
                  alt="64 FRAMEZ"
                  src={coverImg}
                  className="w-full h-full scale-100 lg:scale-[200%]"
                ></Avatar>
                <Box className="w-[346px] md:w-[564px] h-[456px] md:h-[542px] lg:h-[656px] xl:h-[912px] lg:w-[856px] xl:w-[912px] top-0 md:left-[100px]  lg:left-[334px] blur-[70px] absolute z-[-99] opacity-60 rounded-full bg-gradient-to-r from-[#171717] from-10% via-[#f087ff5b] via-85% to-[#171717] to-[5%]"></Box>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
      <Box className="my-4 mx-10 px-16">
        <ScrollingCompo />
      </Box>
    </div>
  );
};

export default HomePage;
