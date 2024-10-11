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

import Project01 from "../../../assets/Projects/InteriorProjects/01-01.jpg";
import Project02 from "../../../assets/Projects/InteriorProjects/01-02.jpg";
import Project03 from "../../../assets/Projects/InteriorProjects/01-03.jpg";
import Project04 from "../../../assets/Projects/InteriorProjects/01-04.jpg";
import Project05 from "../../../assets/Projects/InteriorProjects/01-05.jpg";
import Project06 from "../../../assets/Projects/InteriorProjects/01-06.jpg";
import Project07 from "../../../assets/Projects/InteriorProjects/01-07.jpg";
import Project08 from "../../../assets/Projects/InteriorProjects/01-08.jpg";
import Project09 from "../../../assets/Projects/InteriorProjects/01-09.jpg";
import Project10 from "../../../assets/Projects/InteriorProjects/01-10.jpg";
import Project11 from "../../../assets/Projects/InteriorProjects/01-11.jpg";
import Project12 from "../../../assets/Projects/InteriorProjects/01-12.jpg";
import Project13 from "../../../assets/Projects/InteriorProjects/01-13.jpg";
import Project14 from "../../../assets/Projects/InteriorProjects/01-14.jpg";
import Project15 from "../../../assets/Projects/InteriorProjects/01-15.jpg";
import Project16 from "../../../assets/Projects/InteriorProjects/01-16.jpg";
import Project17 from "../../../assets/Projects/InteriorProjects/01-17.jpg";
import Project18 from "../../../assets/Projects/InteriorProjects/01-18.jpg";
import Project19 from "../../../assets/Projects/InteriorProjects/01-19.jpg";
import Project20 from "../../../assets/Projects/InteriorProjects/01-20.jpg";
import Project21 from "../../../assets/Projects/InteriorProjects/01-21.jpg";
import Project22 from "../../../assets/Projects/InteriorProjects/01-22.jpg";
import Project23 from "../../../assets/Projects/InteriorProjects/01-23.jpg";
import Project24 from "../../../assets/Projects/InteriorProjects/01-24.jpg";
import Project25 from "../../../assets/Projects/InteriorProjects/01-25.jpg";

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

const InteriorDesign = () => {
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

  const interiorProjects = [
    {
      id: 1,
      videoId:
        "https://drive.google.com/file/d/17IROYkPkD6Y-SxL4ko4bCdZTvOQpxTLy/preview",
      thumbnail: Project01,
      btnText: "Project 1",
    },
    {
      id: 2,
      videoId:
        "https://drive.google.com/file/d/1SKAhZ_iYA3m-h_G8O0yorUPxAjnSuzc-/preview",
      thumbnail: Project02,
      btnText: "Project 2",
    },
    {
      id: 3,
      videoId:
        "https://drive.google.com/file/d/1wFLo0o_sUnZtHShgGRhw7f_gKrAt432J/preview",
      thumbnail: Project03,
      btnText: "Project 3",
    },
    {
      id: 4,
      videoId:
        "https://drive.google.com/file/d/1JWevbIUK_CneCiKfeDv_-smNgG85HBNi/preview",
      thumbnail: Project04,
      btnText: "Project 4",
    },
    {
      id: 5,
      videoId:
        "https://drive.google.com/file/d/1UoMgfnTMKaueM4e0vk12x8-5rI3OsoSi/preview",
      thumbnail: Project05,
      btnText: "Project 5",
    },
    {
      id: 6,
      videoId:
        "https://drive.google.com/file/d/1EFR8tkecJIJWfDTyh_6vDcgLl3VlhKtV/preview",
      thumbnail: Project06,
      btnText: "Project 6",
    },
    {
      id: 7,
      videoId:
        "https://drive.google.com/file/d/1GiYtSGZpQ3ksqn97adTd8eBhtINJsZWp/preview",
      thumbnail: Project07,
      btnText: "Project 7",
    },
    {
      id: 8,
      videoId:
        "https://drive.google.com/file/d/1YlU9V-d2cHv9ky1mX5ymEbuthiqkHk1-/preview",
      thumbnail: Project08,
      btnText: "Project 8",
    },
    {
      id: 9,
      videoId:
        "https://drive.google.com/file/d/1kpnjGxml4g9kiLz0ABRpDidxW-fAOZwH/preview",
      thumbnail: Project09,
      btnText: "Project 9",
    },
    {
      id: 10,
      videoId:
        "https://drive.google.com/file/d/1OzNe6G8sj79LT9DuTgl3iHYLnvPa_GKN/preview",
      thumbnail: Project10,
      btnText: "Project 10",
    },
    {
      id: 11,
      videoId:
        "https://drive.google.com/file/d/1Q2xPN7WleJk864KtSxFbrmBbc6DavkNv/preview",
      thumbnail: Project11,
      btnText: "Project 11",
    },
    {
      id: 12,
      videoId:
        "https://drive.google.com/file/d/1oe9uz_QKlvBOoCCRChGSdSZKhzYngPAU/preview",
      thumbnail: Project12,
      btnText: "Project 12",
    },
    {
      id: 13,
      videoId:
        "https://drive.google.com/file/d/121tExiT76e_Gczy9sr-2Pm6INEoKTtwJ/preview",
      thumbnail: Project13,
      btnText: "Project 13",
    },
    {
      id: 14,
      videoId:
        "https://drive.google.com/file/d/1L4jMK-KXj6vnyHB-dgMxQAzqyo-Cn6Y1/preview",
      thumbnail: Project14,
      btnText: "Project 14",
    },
    {
      id: 15,
      videoId:
        "https://drive.google.com/file/d/1-OyB8CM1-DnEYTd5SmwY_hrMEW9lVVEA/preview",
      thumbnail: Project15,
      btnText: "Project 15",
    },
    {
      id: 16,
      videoId:
        "https://drive.google.com/file/d/1gtsc-3B_2TY5uB0k69JnM_jkpd4147QX/preview",
      thumbnail: Project16,
      btnText: "Project 16",
    },
    {
      id: 17,
      videoId:
        "https://drive.google.com/file/d/1_CB5JOGmhZQV3gwbYKJLsmRudn07RGyI/preview",
      thumbnail: Project17,
      btnText: "Project 17",
    },
    {
      id: 18,
      videoId:
        "https://drive.google.com/file/d/14mNqFRzwxoDX1opHgztRwQDTw0ncgTHj/preview",
      thumbnail: Project18,
      btnText: "Project 18",
    },
    {
      id: 19,
      videoId:
        "https://drive.google.com/file/d/1pEWyboJ_dnAAjFm-IqT-djnJOGbQ0oe8/preview",
      thumbnail: Project19,
      btnText: "Project 19",
    },
    {
      id: 20,
      videoId:
        "https://drive.google.com/file/d/1xSE0yh-EsJa5zUL_A2M6FjjJLuxEFnf0/preview",
      thumbnail: Project20,
      btnText: "Project 20",
    },
    {
      id: 21,
      videoId:
        "https://drive.google.com/file/d/1w2asl-vahxmgjHCCDeMTdjZDF1FQ8G3N/preview",
      thumbnail: Project21,
      btnText: "Project 21",
    },
    {
      id: 22,
      videoId:
        "https://drive.google.com/file/d/1QqZb3vH7kT5cYAhsOg9pfui9m10h0MAv/preview",
      thumbnail: Project22,
      btnText: "Project 22",
    },
    {
      id: 23,
      videoId:
        "https://drive.google.com/file/d/1iYi-oS7bt2E5Gqe6G6iM2CCXdhlZ63e-/preview",
      thumbnail: Project23,
      btnText: "Project 23",
    },
    {
      id: 24,
      videoId:
        "https://drive.google.com/file/d/14DqNUngZ_vzxuenWFCzx0vc_zFgTa8Rn/preview",
      thumbnail: Project24,
      btnText: "Project 24",
    },
    {
      id: 25,
      videoId:
        "https://drive.google.com/file/d/1825okvd7SiCRjXRSqsfBS0um6HbDNoB-/preview",
      thumbnail: Project25,
      btnText: "Project 25",
    },
  ];

  return (
    <Container className="flex justify-center md:justify-start align-middle mb-5">
      <Box className="my-10 py-10">
        <Typography className="text-headColor font-poppins text-3xl font-medium my-5 text-center md:text-left">
          Interior Design Projects
        </Typography>
        <Box className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5 pt-4">
          {interiorProjects.map((interiorProject) => (
            <Box
              key={interiorProject.id}
              className="group relative w-full h-64 rounded-[18px] overflow-hidden cursor-pointer font-poppins shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => handleClickOpen(interiorProject.videoId)}
            >
              <video
                className="w-full h-full object-cover"
                poster={interiorProject.thumbnail}
              >
                <source src={interiorProject.videoId} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                {/* <Play className="text-white w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity duration-300" /> */}
              </div>

              <div className="absolute bg-[#d9d9d978] backdrop-blur-sm px-6 py-2 left-[-15px] bottom-5 rounded-[18px]">
                <span className="relative top-0 text-textColor font-poppins uppercase text-base">
                  {interiorProject.btnText}
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

export default InteriorDesign;
