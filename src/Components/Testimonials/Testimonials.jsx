import React, { useRef, useState } from "react";
import { Container, Typography, Box, styled } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import testimonialImg1 from "../../assets/Testimonials/Image1.png";
import testimonialImg2 from "../../assets/Testimonials/Image2.png";

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

const ScrollContainer = styled(Box)({
  display: "flex",
  overflowX: "hidden",
  scrollBehavior: "smooth",
  width: "100%",
});

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 360;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    setTimeout(() => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }, 100);
  };

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
              variant="h4"
              className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center md:text-left w-auto md:w-[450px] lg:w-[550px] font-poppins font-normal"
            >
              We work with customers across all industries
            </Typography>
          </div>
        </div>
        <div className="flex items-end justify-end md:ml-auto rounded-lg gap-5 mx-auto md:mx-0 mt-3 md:mt-0">
          <ArrowBackIosNewIcon
            onClick={() => handleScroll("left")}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-5 sm:p-7 cursor-pointer ${
              canScrollLeft
                ? "bg-[#454545] text-headColor hover:bg-headColor hover:text-[#454545]"
                : "bg-headColor text-[#454545] cursor-not-allowed"
            }`}
            sx={{ transition: ".5s ease-in-out" }}
          />
          <ArrowBackIosNewIcon
            onClick={() => handleScroll("right")}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-5 sm:p-6 md:p-7 cursor-pointer rotate-180 ${
              canScrollRight
                ? "bg-[#454545] text-headColor hover:bg-headColor hover:text-[#454545]"
                : "bg-headColor text-[#454545] cursor-not-allowed"
            }`}
            sx={{ transition: ".5s ease-in-out" }}
          />
        </div>
      </Box>

      <ScrollContainer ref={scrollRef}>
        <Box className="flex gap-4 py-4">
          {/* Testimonial 01 */}
          <GridCard className="py-3 px-4 h-max w-[360px] ">
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
                </Stars>
              </Box>
              <Typography className="font-poppins text-backgroundColor text-[11px] leading-[18px] font-normal text-left mt-5">
                "Incredible Design and Cinematography We hired 64 Framez for a
                complete project overhaul, including graphic design, 3D
                modeling, and cinematography for our marketing campaign."
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
                  alt="testimonial 01"
                  src={testimonialImg1}
                />
                <Box className="self-center pl-2">
                  <Typography className="text-xs text-backgroundColor font-poppins font-medium">
                    John Carter
                  </Typography>
                  <Typography className="text-[11px] text-backgroundColor font-poppins font-normal">
                    Marketing Lead
                  </Typography>
                </Box>
              </Box>
            </div>
          </GridCard>
          {/* Testimonial 01 */}

          {/* Testimonial 02 */}
          <GridCard className="py-3 px-4 h-max w-[360px] ">
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
                "Working with 64 Framez was like a dream come true. They handled
                everything from web design and UI/UX development to product
                photography and 2D animation."
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
                  alt="testimonial 02"
                  src={testimonialImg2}
                />
                <Box className="self-center pl-2">
                  <Typography className="text-xs text-backgroundColor font-poppins font-medium">
                    Peeter pawl
                  </Typography>
                  <Typography className="text-[11px] text-backgroundColor font-poppins font-normal">
                    Designer
                  </Typography>
                </Box>
              </Box>
            </div>
          </GridCard>
          {/* Testimonial 02 */}

          {/* Testimonial 03 */}
          <GridCard className="py-3 px-4 h-max w-[360px] ">
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
                </Stars>
              </Box>
              <Typography className="font-poppins text-backgroundColor text-[11px] leading-[18px] font-normal text-left mt-5">
                "I had a great experience with 64 Framez for a multi-service
                project. They delivered outstanding graphic designs, followed by
                cinematic video shoots."
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
                  alt="testimonial 03"
                  src={testimonialImg2}
                />
                <Box className="self-center pl-2">
                  <Typography className="text-xs text-backgroundColor font-poppins font-medium">
                    Nani
                  </Typography>
                  <Typography className="text-[11px] text-backgroundColor font-poppins font-normal"></Typography>
                </Box>
              </Box>
            </div>
          </GridCard>
          {/* Testimonial 03 */}

          {/* Testimonial 04 */}
          <GridCard className="py-3 px-4 h-max w-[360px] ">
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
                </Stars>
              </Box>
              <Typography className="font-poppins text-backgroundColor text-[11px] leading-[18px] font-normal text-left mt-5">
                "We needed a package of services including web design, logo
                creation, and video editing for our startup. 64 Framez delivered
                all this under one roof, making it easy to communicate.
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
                  alt="testimonial 04"
                  src={testimonialImg2}
                />
                <Box className="self-center pl-2">
                  <Typography className="text-xs text-backgroundColor font-poppins font-medium">
                    Saleem
                  </Typography>
                  <Typography className="text-[11px] text-backgroundColor font-poppins font-normal">
                    Developer
                  </Typography>
                </Box>
              </Box>
            </div>
          </GridCard>
          {/* Testimonial 04 */}
        </Box>
      </ScrollContainer>
    </Container>
  );
};

export default Testimonials;
