import React from "react";
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
import serviceImg1 from "../../assets/Services/picture-dynamic-color.svg";
import serviceImg2 from "../../assets/Services/image 17.svg";
import serviceImg3 from "../../assets/Services/paint-kit-dynamic-color.svg";
import serviceImg4 from "../../assets/Services/Webdev.svg";
import serviceImg5 from "../../assets/Services/camera-dynamic-color.svg";
import serviceImg6 from "../../assets/Services/digitalmarketing.png";
import serviceImg7 from "../../assets/Services/image 15.svg";
import serviceImg8 from "../../assets/Services/3d-dynamic-color.svg";

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

  const handleMoreClick01 = () => {
    navigate("/services/graphic-design");
  };

  const handleMoreClick02 = () => {
    navigate("/services/motion-graphics");
  };

  const handleMoreClick03 = () => {
    navigate("/services/interior-design");
  };

  const handleMoreClick04 = () => {
    navigate("/services/web-design");
  };

  const handleMoreClick05 = () => {
    navigate("/services/photography");
  };

  const handleMoreClick06 = () => {
    navigate("/services/digital-marketing");
  };

  const handleMoreClick07 = () => {
    navigate("/services/cinematography");
  };

  const handleMoreClick08 = () => {
    navigate("/services/3d-cinematography");
  };

  const handleOurServicesClick = () => {
    navigate("/contact");
  };

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
              ></Typography>
              <Typography
                variant="h4"
                className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center md:text-left w-auto md:w-[450px] lg:w-[620px] font-poppins font-normal mt-4"
              >
                High-impact services to take your business to the next level
              </Typography>
            </div>
          </div>
          {/* <ColoredButton
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
          </ColoredButton> */}
        </Box>
        <Container className="my-5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 text-headColor justify-self-center">
          {/* Card 01 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg1}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Graphic Designing
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  We have extensive graphic design experience, and we provide
                  high-quality, more accurate outcomes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick01}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 01 */}

          {/* Card 02 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg2}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Motion Graphics
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Our motion graphics bring your ideas to life with dynamic
                  animations.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick02}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 02 */}

          {/* Card 03 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg3}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Interior Design
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  We create innovative and stylish interior spaces tailored to
                  your needs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick03}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 03 */}

          {/* Card 04 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg4}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Web Design
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Our web designs are user-friendly and visually stunning,
                  enhancing your online presence.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick04}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 04 */}

          {/* Card 05 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg5}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Photography{" "}
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  We capture your moments with professional and creative
                  photography.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick05}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 05 */}

          {/* Card 06 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg6}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Digital Marketing
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  Our main goal is to provide 100% results and maintain social
                  media with high precision.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick06}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 06 */}

          {/* Card 07 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg7}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  Cinematography
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  We have extensive expertise editing videos, and we provide
                  amazing insights into your thoughts.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick07}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 07 */}

          {/* Card 08 */}
          <HoverCard className="justify-self-center">
            <CardActionArea className="flex flex-col">
              <CardMedia
                component="img"
                image={serviceImg8}
                alt="ServicesImg1"
                className="cardImg mt-3 mx-5 w-[210px] h-[210px] justify-self-center"
              />
              <CardContent className="mt-0 mx-1 gap-[14px] relative h-[145px]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-headColor font-poppins font-normal text-[18px]"
                >
                  3D Cinematography
                </Typography>
                <Typography
                  variant="body2"
                  className="font-poppins font-light text-[14px] text-[#D0D0D0]"
                >
                  We produce immersive 3D cinematography that captivates and
                  engages viewers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="gap-0 mx-3 mb-4 align-baseline">
              <CustomButton
                size="small"
                className="font-poppins text-headColor text-[12px] self-center font-light mt-0 md:mt-5 xl:mt-1"
                sx={{ letterSpacing: "2px" }}
                onClick={handleMoreClick08}
              >
                <span className="hoverButtonText">More</span>
                <CallMadeIcon className="text-[#848895] w-5 h-5 mx-2 self-center" />
              </CustomButton>
            </CardActions>
          </HoverCard>
          {/* / Card 08 */}
        </Container>
      </Container>
    </div>
  );
};

export default Services;
