import React from 'react';
import WEB1 from '../About/WEB1.png'
import WEB2 from '../About/WEB2.png'
import WEB3 from '../About/WEB3.png'

const About = () => {
  return (
    <div className="bg-black">
      {/* Top section with WEB1 background */}
      <div className="relative h-[70vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${WEB1})` }}>
        <nav className="flex justify-center items-center h-full">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center z-10">About Us</h1>
        </nav>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for blur effect */}
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex flex-wrap justify-between">
          {/* First WEB2 Image with text and buttons */}
          <div className="w-full md:w-1/2 p-2">
            <img
              src={WEB2}
              alt="Why Choose 64 Framez?"
              className="rounded-lg shadow-lg transform transition-all hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
            <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
              Why Choose 64 Framez?
            </h2>
            <p className="font-poppins text-base md:text-lg lg:text-xl font-medium leading-normal text-white mt-4">
              Passion for Excellence: We are passionate about what we do, and it shows in our work. Every project is an
              opportunity to push the boundaries of creativity and deliver exceptional results.
              <br />
              <br />
              Tailored Solutions: We understand that every client is unique. Our solutions are customized to meet your
              specific needs and objectives, ensuring a perfect fit for your brand.
            </p>
            {/* Buttons side by side */}
            <div className="mt-6 flex space-x-4">
              <button
                className="bg-[#2D2D2D] text-white px-8 py-3 rounded-tl-[20px] rounded-bl-[20px] shadow-lg transform transition-all hover:bg-[#1a1a1a]"
              >
                View Services
              </button>
              <button
                className="bg-[#FFFFFF] text-black px-8 py-3 rounded-tl-[20px] rounded-bl-[20px] shadow-lg transform transition-all hover:bg-[#f0f0f0]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Second WEB2 Image with text */}
        <div className="flex flex-wrap justify-between mt-6">
          <div className="w-full md:w-1/2 p-2">
            <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
              Why Us?
            </h2>
            <p className="font-poppins text-base md:text-lg lg:text-xl font-medium leading-normal text-white mt-4">
              Collaborative Approach: We believe in working closely with our clients, valuing their input, and fostering
              a collaborative environment to achieve the best outcomes.
              <br />
              <br />
              Innovative Thinking: At 64 Framez, innovation is at the heart of everything we do. We embrace new
              technologies, trends, and techniques to stay ahead of the curve and deliver cutting-edge designs.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <img
              src={WEB2}
              alt="Why Us?"
              className="rounded-lg shadow-lg transform transition-all hover:scale-105 w-full h-auto"
            />
          </div>
        </div>

        {/* Statistics section */}
        <div className="flex flex-wrap justify-between mt-6 text-center">
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl font-bold text-white">20+</h2>
            <p className="text-sm md:text-base text-white">Year of Experience</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl font-bold text-white">1,000+</h2>
            <p className="text-sm md:text-base text-white">Project Done</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl font-bold text-white">300+</h2>
            <p className="text-sm md:text-base text-white">Satisfied Clients</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <h2 className="text-xl md:text-3xl font-bold text-white">64</h2>
            <p className="text-sm md:text-base text-white">Certified Awards</p>
          </div>
        </div>

        {/* Bottom section with WEB3 background */}
        <div className="relative h-[70vh] w-full bg-cover bg-center mt-6 rounded-lg" style={{ backgroundImage: `url(${WEB3})` }}>
          <div className="flex justify-center items-center h-full">
            <div className="text-center z-10">
              <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
                Hire Us Now
              </h2>
              <p className="font-poppins text-base md:text-lg lg:text-xl font-medium leading-normal text-white mt-4">
                We Are Always Ready To Take A Perfect Choice
              </p>
              <button className="bg-white text-black px-4 py-2 mt-4 rounded-lg transform transition-all hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for blur effect */}
        </div>
      </div>
    </div>
  );
};

export default About;