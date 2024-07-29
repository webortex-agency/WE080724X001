import React from "react";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import coverImg from "../../../assets/cover.png";
import ScrollingCompo from "../ScrollingCompo/ScrollingCompo";

const HomePage = () => {
  return (
    <div className="w-screen h-screen m-0 p-0">
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
                  className="font-poppins text-headColor text-center md:text-left text-3xl sm:text-5xl md:text-5xl lg:text-7xl md:pe-36  font-light"
                >
                  We Are Creative Designers
                </Typography>
                <Typography
                  variant="h6"
                  className="font-poppins text-textColor text-center md:text-left text-sm sm:text-base lg:text-lg mt-3 md:mt-4 lg:mt-7"
                >
                  A manual for joining the 64 framez.
                  <br /> By Designers for builders.
                </Typography>
              </div>
              <div className="grid-rows-12 md:grid-rows-6 text-center self-center px-3 pt-6 md:pt-0">
                <Avatar
                  alt="64 FRAMEZ"
                  src={coverImg}
                  className="w-full h-full scale-100 lg:scale-[175%]"
                ></Avatar>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
      <Box className="my-4 mx-20 px-20">
        <ScrollingCompo />
      </Box>
    </div>
  );
};

export default HomePage;
