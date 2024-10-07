import React from "react";
import img1 from "../../../assets/About/img1.png";
import img2 from "../../../assets/Services/camera-dynamic-color.svg";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PhotographyService = () => {
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
            Photography
          </h1>
          <div className="mt-3 z-10">
            <p className="font-poppins text-base md:text-base font-medium text-[#a5a3a3] text-center">
              Home / <span className="">Photography</span>
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
                Photography is an essential tool in storytelling, and at
                Webortex, we capture your moments with professionalism and
                creativity. Our photography services cover a wide range of
                needs, from personal portraits and event photography to product
                shoots and brand imagery. We believe that every photo should
                tell a story, and our team of skilled photographers is dedicated
                to capturing the essence of each moment with precision and
                artistry.
              </div>
              <div>
                We use high-quality equipment and innovative techniques to
                ensure that every shot is visually stunning and perfectly
                aligned with your objectives. Whether you need professional
                headshots for your team, captivating product images for your
                e-commerce site, or lifestyle photography that showcases your
                brand, we provide customized solutions that meet your needs. Our
                approach is collaborative, working closely with you to
                understand your vision and delivering results that exceed
                expectations.
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

export default PhotographyService;
