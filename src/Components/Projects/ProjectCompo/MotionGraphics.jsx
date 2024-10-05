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
import { Play, X } from "lucide-react";

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

const MotionGraphics = () => {
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

  const motionGraphicsProjects = [
    {
      id: 1,
      videoId:
        "https://drive.google.com/file/d/1engmCgcH_FDyTspDGZUwNk86hTwY4F06/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 1",
    },
    {
      id: 2,
      videoId:
        "https://drive.google.com/file/d/1RAws9TmO_1TbQpZcC7_mVy61cdGdJSX_/preview",
      thumbnail:
        "preview",
      btnText: "Project 2",
    },

    {
      id: 3,
      videoId:
        "https://drive.google.com/file/d/1OrEWU-dMQrzTc9s3Y3Dre9Nq__G4Ngdj/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 3",
    },
    {
      id: 4,
      videoId:
        "https://drive.google.com/file/d/1-U9YYAnqeRuW-yi1c1Xpesw2p7wpFmE6/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 4",
    },
    {
      id: 5,
      videoId:
        "https://drive.google.com/file/d/1styiCMb3m9fY7bhQlgWcSbTC8a9SgqXD/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 5",
    },
    {
      id: 6,
      videoId:
        "https://drive.google.com/file/d/1eAYFeJ6lHEF9rpRS75RLtIJXH_xmo15z/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 6",
    },
    {
      id: 7,
      videoId:
        "https://drive.google.com/file/d/1AvcYPJUQM20SgHszAio10EwqZ1iXxqru/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 7",
    },
    {
      id: 8,
      videoId:
        "https://drive.google.com/file/d/1wuoHEQj61d0xomiv0m38Fr6OEeMB5WZj/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 8",
    },
    {
      id: 9,
      videoId:
        "https://drive.google.com/file/d/1OuWlWV5JzwQGn6jDS6TTmBtDPUKHf316/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 9",
    },
    {
      id: 10,
      videoId:
        "https://drive.google.com/file/d/1tOxGsz88Kwp62bNeeoi7dT4hfd_CqAn8/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 10",
    },
    {
      id: 11,
      videoId:
        "https://drive.google.com/file/d/1-bG2sQYReQOxY3pG78XdODIKHFT3u20z/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 11",
    },
    {
      id: 12,
      videoId:
        "https://drive.google.com/file/d/10qs0TDtM33w6LVXVGpyAYi7YqDu3WVwe/preview",
      thumbnail: "/path/to/thumbnail1.jpg",
      btnText: "Project 12",
    },
  ];

  return (
    <Container className="flex justify-center md:justify-start align-middle mb-5">
      <Box className="my-10 py-10">
        <Typography className="text-headColor font-poppins text-3xl font-medium my-5 text-center md:text-left">
          Motion Graphics Projects
        </Typography>
        <Box className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5 pt-4">
          {motionGraphicsProjects.map((motionGraphicsProject) => (
            <Box
              key={motionGraphicsProject.id}
              className="group relative w-full h-64 rounded-[18px] overflow-hidden cursor-pointer font-poppins shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => handleClickOpen(motionGraphicsProject.videoId)}
            >
              <video
                className="w-full h-full object-cover"
                poster={motionGraphicsProject.thumbnail}
              >
                <source src={motionGraphicsProject.videoId} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Play className="text-white w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bg-[#d9d9d978] backdrop-blur-sm px-6 py-2 left-[-15px] bottom-5 rounded-[18px]">
                <span className="relative top-0 text-textColor font-poppins uppercase text-base">
                  {motionGraphicsProject.btnText}
                </span>
              </div>
            </Box>
          ))}
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
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
        className="h-screen w-screen flex items-center justify-center"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
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
        </Box>
      </Dialog>
    </Container>
  );
};

export default MotionGraphics;
