import React from "react";
import WEB1 from "../../assets/About/img1.png";
import WEB2 from "../../assets/About/img2.svg";
import WEB3 from "../../assets/About/img3.png";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleViewServicesClick = () => {
    navigate("/contact");
  };

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <div className="">
      <div
        className="relative h-[50vh] w-full bg-cover bg-center -mt-28"
        style={{ backgroundImage: `url(${WEB1})` }}
      >
        <nav className="flex flex-col justify-center items-center h-full">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide font-medium text-white z-10">
            About Us
          </h1>
          <div className="mt-3 z-10">
            <p className="font-poppins text-base md:text-base font-medium text-[#a5a3a3] text-center">
              Home /{" "}
              <span className="">
                <a href="/about">About</a>
              </span>
            </p>
          </div>
        </nav>
        <div className="absolute inset-0 bg-backgroundColor bg-opacity-85"></div>
      </div>

      <Container maxWidth="lg" className="mt-5 md:mt-20">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center">
            <img
              src={WEB2}
              alt="Why Choose 64 Framez?"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-14 flex flex-col justify-center self-center mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center md:text-left">
              Why Choose 64 Framez?
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-white mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                Passion for Excellence: We are passionate about what we do, and
                it shows in our work. Every project is an opportunity to push
                the boundaries of creativity and deliver exceptional results.
              </div>
              <div>
                Tailored Solutions: We understand that every client is unique.
                Our solutions are customized to meet your specific needs and
                objectives, ensuring a perfect fit for your brand.
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <button
                className="bg-[#2D2D2D] mx-auto md:mx-0 text-white md:mr-6 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-headColor hover:text-backgroundColor"
                onClick={handleViewServicesClick}
              >
                View Services
              </button>
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Second WEB2 Image with text */}
        <div className="flex flex-wrap justify-center md:justify-between mt-16 md:mt-36">
          <div className="w-full md:w-1/2 lg:w-3/5 md:pr-14 flex flex-col justify-center self-center order-1 md:order-0 mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center">
              Why Us?
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-white mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                Collaborative Approach: We believe in working closely with our
                clients, valuing their input, and fostering a collaborative
                environment to achieve the best outcomes.
              </div>
              <div>
                Innovative Thinking: At 64 Framez, innovation is at the heart of
                everything we do. We embrace new technologies, trends, and
                techniques to stay ahead of the curve and deliver cutting-edge
                designs.
              </div>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center order-0 md:order-1">
            <img
              src={WEB2}
              alt="Why Us?"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
        </div>

        <Container
          maxWidth="md"
          className="flex flex-wrap justify-between mt-16 md:mt-24 text-center"
        >
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
              20+
            </h2>
            <p className="text-sm md:text-base text-textColor mt-2">
              Year of Experience
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
              1,000+
            </h2>
            <p className="text-sm md:text-base text-textColor mt-2">
              Project Done
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
              300+
            </h2>
            <p className="text-sm md:text-base text-textColor mt-2">
              Satisfied Clients
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
              64
            </h2>
            <p className="text-sm md:text-base text-textColor mt-2">
              Certified Awards
            </p>
          </div>
        </Container>

        <div
          className="relative h-[45vh] w-full bg-cover bg-center rounded-[18px] my-16 md:my-24"
          style={{ backgroundImage: `url(${WEB3})` }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center z-10">
              <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-7 lg:mb-8 text-white">
                Hire Us Now
              </h2>
              <div className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-7 lg:mb-8 tracking-wide font-medium leading-tight text-white mt-4">
                We Are Always Ready To
                <div className="font-poppins text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wide font-medium leading-tight text-white mt-4">
                  Take A Perfect Choice
                </div>
              </div>
              <button
                className="bg-white text-backgroundColor px-12 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-navlinkActiveColor hover:text-headColor"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-backgroundColor bg-opacity-65"></div>
        </div>
      </Container>
    </div>
  );
};

export default About;
