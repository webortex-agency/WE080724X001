import React from "react";
import img1 from "../../../assets/About/img1.png";
import img2 from "../../../assets/Services/image 17.svg";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MotionGraphicService = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  return (
    <div className="">
      <div
        className="relative h-[50vh] w-full bg-cover bg-center -mt-28"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <nav className="flex flex-col justify-center items-center h-full">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide font-medium text-white z-10">
            Motion Graphics
          </h1>
          <div className="mt-3 z-10">
            <p className="font-poppins text-base md:text-base font-medium text-[#a5a3a3] text-center">
              Home / <span className="">Motion Graphics</span>
            </p>
          </div>
        </nav>
        <div className="absolute inset-0 bg-backgroundColor bg-opacity-85"></div>
      </div>

      <Container maxWidth="lg" className="mt-5 md:mt-20 mb-20">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center">
            <img
              src={img2}
              alt="Why Choose 64 Framez?"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-14 flex flex-col justify-center self-center mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center md:text-left">
              Why Choose 64 Framez?
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-textColor mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                In today’s digital landscape, static visuals aren’t always
                enough to capture attention—this is where motion graphics come
                into play. At Webortex, we offer top-tier motion graphic
                services designed to bring your ideas to life through animation
                and dynamic visual storytelling. Motion graphics can be used for
                everything from marketing videos, explainer animations, and
                product showcases to social media content that catches the eye
                and keeps audiences engaged.
              </div>
              <div>
                Our motion graphics team blends creativity with technical
                expertise, using industry-leading software to create animations
                that are smooth, visually appealing, and aligned with your
                brand’s identity. Whether you’re looking to explain complex
                concepts in a digestible format or add an engaging visual
                element to your marketing efforts, our motion graphics services
                are the perfect solution. We work closely with you to ensure the
                final product matches your vision, while also enhancing it with
                our expertise in design and animation.
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MotionGraphicService;
