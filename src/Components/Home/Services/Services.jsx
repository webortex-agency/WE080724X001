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

const HoverCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#292930",
  maxWidth: "300px",
  justifySelf: "center",
  borderRadius: "30px",
  flexDirection: "column",
  opacity: "0.35",
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
    transition: "opacity 0.4s ease, width 0.4s ease",
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
      "Our motion graphics bring your ideas to life with dynamic animations. ",
  },
  {
    image: "src/assets/Services/interiordesign.png",
    title: "Interior Design",
    description:
      "We create innovative and stylish interior spaces tailored to your needs.",
  },
  {
    image: "src/assets/Services/webdevelopment.png",
    title: "Web Design",
    description:
      "Our web designs are user-friendly and visually stunning, enhancing your online presence.",
  },
  {
    image: "src/assets/Services/photography.png",
    title: "Photography",
    description:
      "We capture your moments with professional and creative photography.",
  },
  {
    image: "src/assets/Services/digitalmarketing.png",
    title: "Digital Marketing",
    description:
      "Our main goal is to provide 100% results and maintain social media with high precision.",
  },
  {
    image: "src/assets/Services/cinematography.png",
    title: "Cinematography",
    description:
      "We have extensive expertise editing videos, and we provide amazing insights into your thoughts.",
  },
  {
    image: "src/assets/Services/3dcinematography.png",
    title: "3D Cinematography",
    description:
      "We produce immersive 3D cinematography that captivates and engages viewers.",
  },
];
const Services = ({ cards = ServicesData }) => {
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
                High-impact services to take your business to the next level
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
          >
            Our Services
            <KeyboardArrowRightTwoToneIcon
              className="bg-iconBgColor text-iconColor border-none w-[14px] h-[14px] rounded-lg p-[1px] "
              id="buttonIcon"
            />
          </ColoredButton>
        </Box>
        <Container className="my-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-[73px] text-headColor justify-self-center">
          {cards.map((card, index) => (
            <HoverCard key={index} className="justify-self-center">
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
              <CardActions className="gap-0 mx-3 mb-4 align-baseline">
                <CustomButton
                  size="small"
                  className="font-poppins text-headColor text-[12px] self-center font-light"
                  sx={{ letterSpacing: "2px" }}
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
