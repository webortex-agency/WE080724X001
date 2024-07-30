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
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import CallMadeIcon from "@mui/icons-material/CallMade";

const ServicesData = [
  {
    image: "src/assets/Services/graphicdesign.png",
    title: "Graphic Designing",
    description:
      "We have extensive graphic design experience, and we provide high-quality, more accurate outcomes.",
  },
  {
    image: "src/assets/Services/motiongraphics.png",
    title: "Motion Graphics",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/interiordesign.png",
    title: "Interior Design",
    description:
      "With our development team, we are here to create the website in a personalized way and with excellent outcomes.",
  },
  {
    image: "src/assets/Services/webdevelopment.png",
    title: "Web Design",
    description:
      "We have extensive expertise editing videos, and we provide amazing insights into your thoughts.",
  },
  {
    image: "src/assets/Services/photography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/digitalmarketing.png",
    title: "Digital Marketing",
    description:
      "Our main goal is to provide 100% results and maintain social media with high precision.",
  },
  {
    image: "src/assets/Services/cinematography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms. ",
  },
  {
    image: "src/assets/Services/3dcinematography.png",
    title: "Photography & Cinematography",
    description:
      "We create high-quality, accurate web apps for iOS and Android platforms.",
  },
];
const Services = ({ cards = ServicesData }) => {
  return (
    <div className="w-full relative z-10">
      <Box className="w-full mt-20 md:mt-0 h-[350px] md:h-[250px] blur-[90px] absolute z-[-99] opacity-60 rounded-full bg-gradient-to-r from-[#171717] via-[#f087ff5b] to-[#171717] "></Box>

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
                High-impact services to take your business to the next level
              </Typography>
            </div>
          </div>
          <Button
            className="text-[16px] bg-buttonBgColor text-buttonTextColor font-poppins font-normal py-4 px-6 md:ml-auto rounded-lg gap-1 mx-auto md:mx-0"
            sx={{
              maxWidth: "255px",
              maxHeight: "62px",
              textTransform: "capitalize",
            }}
          >
            Our Services
            <KeyboardArrowRightTwoToneIcon className=" bg-iconBgColor text-iconColor border-none w-[14px] h-[14px] rounded-lg p-[1px] " />
          </Button>
        </Box>
        <Container className="my-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-[73px] text-headColor justify-self-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#292930] w-[320px] md:w-auto justify-self-center  rounded-[30px] hover:shadow-serviceCardShadow flex flex-col"
              sx={{ border: "1px solid #424245", animation: ".3s ease-in-out" }}
            >
              <CardActionArea className="flex flex-col">
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  className="mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
                />
                <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-headColor font-poppins font-normal text-[18px]"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className=" gap-0 mx-3 mb-4 align-baseline">
                <Button
                  size="small"
                  className="font-poppins text-headColor text-[12px] self-center font-light"
                  sx={{ letterSpacing: "2px" }}
                >
                  More
                  <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      </Container>
    </div>
  );
};

Services.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Services;
