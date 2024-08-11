import React from "react";
import { Container, Typography, Box, styled } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const testimonialsData = [
  {
    content:
      "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
    image: "src/assets/Testimonials/Image1.png",
    name: "John Carter",
    role: "Marketing Lead at Google",
  },
  {
    content:
      "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
    image: "src/assets/Testimonials/Image2.png",
    name: "Peeter pawl",
    role: "Designer",
  },
  {
    content:
      "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
    image: "src/assets/Testimonials/Image2.png",
    name: "Peeter pawl",
    role: "Designer",
  },
  {
    content:
      "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.",
    image: "src/assets/Testimonials/Image2.png",
    name: "Peeter pawl",
    role: "Designer",
  },
];

const GridCard = styled(Box)(({ theme }) => ({
  background: "linear-gradient(151.16deg, #FFF8F8 10.38%, #F5F7FF 95.44%)",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "column",
}));

const InnerCard = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  borderRadius: "18px",
  boxShadow: "0px 1.31px 2.63px 0px #92929240",
  display: "flex",
  flexDirection: "column",
}));

const GreenCircle = styled(Box)(({ theme }) => ({
  width: "19.03px",
  height: "19.03px",
  background: "#6FDB5D",
  borderRadius: "50%",
  top: "10px",
  left: "10px",
}));

const OrangeTriangle = styled(Box)(({ theme }) => ({
  width: 0,
  height: 0,
  borderLeft: "12.5px solid transparent",
  borderRight: "12.5px solid transparent",
  borderBottom: "25px solid #FFDC60",
  top: "10px",
  left: "35px",
}));

const Stars = styled(Box)(({ theme }) => ({
  display: "flex",
  top: "10px",
  right: "10px",
}));

const Star = styled(Typography)(({ theme }) => ({
  color: "#FFB545",
  fontSize: "20px",
}));

const Testimonials = () => {
  return (
    <Container
      maxWidth="lg"
      className="w-full h-full bg-backgroundColor font-poppins relative flex flex-col my-16"
    >
      <Box className="flex flex-col md:flex-row my-3 py-2 md-my-2 md:py-1">
        <div className="gap-4 md:inline-flex md:justify-start text-center md:text-left">
          <ContactSupportIcon
            className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full 
            "
          />
          <div className="my-5 md:my-0">
            <Typography
              className="text-[15px] text-[#D0D0D0] font-poppins"
              sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
            >
              <span className="text-[#FEC90C] mx-1">//</span>
              04 . Testimonial
            </Typography>
            <Typography
              variant="h4"
              className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center md:text-left w-auto md:w-[450px] lg:w-[550px] font-poppins font-normal mt-4"
            >
              We work with customers across all industries
            </Typography>
          </div>
        </div>
        <div className="flex items-end justify-end md:ml-auto rounded-lg gap-5 mx-auto md:mx-0 mt-3 md:mt-0">
          <ArrowBackIosNewIcon
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#454545] p-5 sm:p-7 text-headColor hover:bg-headColor hover:text-[#454545] cursor-pointer"
            sx={{ transition: ".4s ease" }}
          />
          <ArrowBackIosNewIcon
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#454545] p-5 sm:p-7 text-headColor hover:bg-headColor hover:text-[#454545] cursor-pointer rotate-180"
            sx={{ transition: ".4s ease" }}
          />
        </div>
      </Box>

      <Box className="w-full h-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-x-4 gap-y-5 my-10 px-2 md:px-0 rounded-lg">
        {testimonialsData.map((testimonialData, index) => (
          <GridCard key={index} className="py-3 px-4 h-max">
            <InnerCard className="py-4 px-5 rounded-lg">
              <Box className="flex items-center">
                <Box className="flex justify-start items-center">
                  <GreenCircle />
                  <OrangeTriangle />
                </Box>

                <Stars className="justify-self-end ml-auto">
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                </Stars>
              </Box>
              <Typography className="font-poppins text-backgroundColor text-[11px] leading-[18px] font-normal text-left mt-5">
                {testimonialData.content}
              </Typography>
            </InnerCard>
            <div
              className="mt-4 mb-2"
              style={{
                display: "flex",
                alignItems: "center",
                width: "calc(100% - 40px)",
              }}
            >
              <Box className="flex justify-start">
                <img
                  className="w-10 h-10 rounded-full object-cover object-center"
                  alt={`testimonial ${index}`}
                  src={testimonialData.image}
                />
                <Box className="self-center pl-2">
                  <Typography className="text-xs text-backgroundColor font-poppins font-medium">
                    {testimonialData.name}
                  </Typography>
                  <Typography className="text-[11px] text-backgroundColor font-poppins font-normal">
                    {testimonialData.role}
                  </Typography>
                </Box>
              </Box>
            </div>
          </GridCard>
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;
