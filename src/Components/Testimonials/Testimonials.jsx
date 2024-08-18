import React, { useRef, useState } from "react";
import { Container, Typography, Box, styled } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Consumer } from "../Context/Context";

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
    <Consumer>
      {(value) => {
        const { testimonialsData } = value;
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
                {testimonialsData.map((testimonialData) => (
                  <GridCard
                    key={testimonialData.id}
                    className="py-3 px-4 h-max w-[360px] "
                  >
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
                          alt={`testimonial ${testimonialData.id}`}
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
            </ScrollContainer>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default Testimonials;
