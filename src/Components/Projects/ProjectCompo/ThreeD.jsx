import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Dialog,
  Slide,
  Backdrop,
  IconButton,
} from "@mui/material";
<<<<<<< HEAD
import { Play, X } from "lucide-react";
import Project01 from "../../../assets/Projects/3DProjects/3dProject1.png";
=======
import dummyImg from "../../../assets/Projects/dummy.png";
>>>>>>> main

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useVideoDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 810,
    height: 540,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setDimensions({
          width: 250,
          height: 150,
        });
      } else if (width < 490) {
        setDimensions({
          width: 320,
          height: 220,
        });
      } else if (width < 640) {
        setDimensions({
          width: Math.min(width * 0.9, 405),
          height: Math.min((width * 0.9 * 540) / 810, 270),
        });
      } else if (width < 768) {
        setDimensions({
          width: 405,
          height: 270,
        });
      } else if (width < 1024) {
        setDimensions({
          width: 540,
          height: 360,
        });
      } else {
        setDimensions({
          width: 810,
          height: 540,
        });
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

const ThreeD = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const dimensions = useVideoDimensions();

  const handleClickOpen = (videoId) => {
    setSelectedVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo("");
  };

<<<<<<< HEAD
  const graphicProjects = [
    {
      id: 1,
      videoId:
        "https://drive.google.com/file/d/19iAmxOR3rjrxpOfj4FfKUHvTxuqore9T/preview",
      thumbnail: Project01,
      btnText: "Project 1",
    },
  ];

  return (
    <Container className="flex justify-center md:justify-start align-middle mb-5">
      <Box className="my-10 py-10">
        <Typography className="text-headColor font-poppins text-3xl font-medium my-5 text-center md:text-left">
          3D Projects
        </Typography>
        <Box className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5 pt-4">
          {graphicProjects.map((graphicProject) => (
            <Box
              key={graphicProject.id}
              className="group relative w-full h-64 rounded-[18px] overflow-hidden cursor-pointer font-poppins shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => handleClickOpen(graphicProject.videoId)}
            >
              <video
                className="w-full h-full object-cover"
                poster={graphicProject.thumbnail}
              >
                <source src={graphicProject.videoId} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Play className="text-white w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bg-[#d9d9d978] backdrop-blur-sm px-6 py-2 left-[-15px] bottom-5 rounded-[18px]">
                <span className="relative top-0 text-textColor font-poppins uppercase text-base">
                  {graphicProject.btnText}
                </span>
              </div>
            </Box>
          ))}
=======
  return (
    <Container className="flex justify-center md:justify-start align-middle mb-5">
      <Box className="my-10 py-10">
        <Typography className="text-headColor font-poppins text-3xl font-medium my-5 text-center md:text-left">
          3D Projects
        </Typography>
        <Box className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5 pt-4">
          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>

          <Box
            className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
            onClick={() => handleClickOpen(dummyImg)}
          >
            <img component="image" src={dummyImg} alt="dummy-img-01" />
            <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
              <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                sample image
              </span>
            </div>
          </Box>
>>>>>>> main
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={false}
        PaperProps={{
          style: {
<<<<<<< HEAD
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
        className="h-screen w-screen flex items-center justify-center"
=======
            objectFit: "contain",
            borderRadius: "18px",
          },
        }}
        className="h-max w-max"
>>>>>>> main
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
<<<<<<< HEAD
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <Box className="relative flex items-center justify-center p-4">
          <IconButton
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-50"
          >
            <X className="w-6 h-6" />
          </IconButton>

          <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                width={dimensions.width}
                height={dimensions.height}
                allow="autoplay"
                style={{ border: 0 }}
              ></iframe>
            )}
          </div>
=======
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Box className="flex items-center justify-center relative ">
          <img src={selectedImage} alt="Project Image" />
>>>>>>> main
        </Box>
      </Dialog>
    </Container>
  );
};

export default ThreeD;
