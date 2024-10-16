import React from "react";
import img1 from "../../../assets/About/img1.png";
import img2 from "../../../assets/webdev.svg";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WebDesignService = () => {
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
            Web Design
          </h1>
          <div className="mt-3 z-10">
            <p className="font-poppins text-base md:text-base font-medium text-[#a5a3a3] text-center">
              Home / <span className="">Web Design</span>
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
                In a digital-first world, your website is often the first
                interaction potential customers have with your brand. At
                Webortex, we specialize in designing user-centric websites that
                not only look stunning but also provide an intuitive and
                seamless user experience. Our web design services focus on
                creating responsive, visually appealing sites that function
                flawlessly across all devices and browsers.
              </div>
              <div>
                We believe that a well-designed website should be more than just
                a digital brochure; it should engage users, provide clear
                navigation, and drive conversions. Our team of designers
                combines aesthetics with functionality, ensuring that your
                website is not only attractive but also optimized for
                performance. We use the latest design trends, including modern
                layouts, minimalist designs, and interactive elements, to create
                websites that stand out in the competitive digital landscape.
                Whether you're looking for a complete website overhaul or a new
                design from scratch, Webortex is committed to delivering a site
                that reflects your brand and meets your business goals.
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

export default WebDesignService;
