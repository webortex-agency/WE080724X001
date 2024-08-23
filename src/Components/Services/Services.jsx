import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  styled,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import { Consumer } from "../Context/Context";

const HoverCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#292930",
  maxWidth: "300px",
  justifySelf: "center",
  borderRadius: "30px",
  flexDirection: "column",
  opacity: ".85",
  transition: "opacity .3s ease-in-out",
  border: "1px solid #424245",
  "&:hover": {
    opacity: "1",
    "& .hoverButtonText": {
      width: "auto",
      opacity: 1,
      marginLeft: "4px",
      transition: ".3s ease-in-out",
    },
    "& .cardImg": {
      opacity: 1,
      transition: ".5s ease",
    },
  },
  "& .cardImg": {
    opacity: ".35",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  "& .hoverButtonText": {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    transition: "opacity 0.8s ease, width 0.4s ease",
    transitionDelay: "1000ms",
  },
}));

const ColoredButton = styled(Button)(({ theme }) => ({
  background: "#ffffff",
  color: "#171717",
  "&:hover": {
    backgroundColor: "#5a56e8",
    color: "#ffffff",
    transition: ".5s ease",
    "& #buttonIcon": {
      color: "#5a56e8",
      backgroundColor: "#ffffff",
      transition: ".3s ease",
    },
  },
}));

const Services = () => {
  const navigate = useNavigate();

  const handleMoreClick = (path) => {
    navigate(path);
  };

  const handleOurServicesClick = () => {
    navigate("/contact");
  };

  return (
    <Consumer>
      {(value) => {
        const { servicesData } = value;
        return (
          <div className="w-full relative z-10" id="services">
            <Box className="w-full mt-20 md:mt-0 h-[350px] md:h-[250px] blur-[100px] absolute z-[-99] opacity-60 rounded-full bg-gradient-to-r from-[#171717] via-[#f087ff5b] to-[#171717] "></Box>

            <Container maxWidth="lg" className="my-5 p-5 flex flex-col">
              <Box className="flex flex-col md:flex-row my-3 py-2 md-my-2 md:py-1">
                <div className="gap-4 md:inline-flex md:justify-start text-center md:text-left">
                  <SettingsIcon
                    className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full 
                  "
                  />
                  <div className="my-5 md:my-0">
                    <Typography
                      className="text-[15px] text-[#D0D0D0] font-poppins"
                      sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
                    >
                      <span className="text-[#FEC90C] mx-1">//</span>
                      01 . Services
                    </Typography>
                    <Typography
                      variant="h4"
                      className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center md:text-left w-auto md:w-[450px] lg:w-[620px] font-poppins font-normal mt-4"
                    >
                      High-impact services to take your business to the next
                      level
                    </Typography>
                  </div>
                </div>
                <ColoredButton
                  className="text-[16px] font-poppins font-normal py-4 px-6 md:ml-auto rounded-lg gap-1 mx-auto md:mx-0 "
                  sx={{
                    maxWidth: "255px",
                    maxHeight: "62px",
                    textTransform: "capitalize",
                    transition: ".3s ease-in-out",
                  }}
                  onClick={handleOurServicesClick}
                >
                  Our Services
                  <KeyboardArrowRightTwoToneIcon
                    className="bg-iconBgColor text-iconColor border-none w-[14px] h-[14px] rounded-lg p-[1px] "
                    id="buttonIcon"
                  />
                </ColoredButton>
              </Box>
              <Container className="my-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 text-headColor justify-self-center">
                {servicesData.map((serviceData) => (
                  <HoverCard
                    key={serviceData.id}
                    className="justify-self-center"
                  >
                    <CardActionArea className="flex flex-col">
                      <CardMedia
                        component="img"
                        image={serviceData.image}
                        alt={serviceData.title}
                        className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
                      />
                      <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="text-headColor font-poppins font-normal text-[18px]"
                        >
                          {serviceData.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                        >
                          {serviceData.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className="gap-0 mx-3 mb-4 align-baseline">
                      <CustomButton
                        size="small"
                        className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                        sx={{ letterSpacing: "2px" }}
                        onClick={() => handleMoreClick(serviceData.path)}
                      >
                        <span className="hoverButtonText">More</span>
                        <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
                      </CustomButton>
                    </CardActions>
                  </HoverCard>
                ))}
              </Container>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Services;
