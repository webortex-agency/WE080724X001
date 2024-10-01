import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Dialog,
  Slide,
  Backdrop,
} from "@mui/material";
import { Consumer } from "../../Context/Context";

const video1Url =
  "https://drive.google.com/file/d/1engmCgcH_FDyTspDGZUwNk86hTwY4F06/preview";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThreeD = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Consumer>
      {(value) => {
        const { graphicProjects } = value;
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
                    className="w-full h-full rounded-[18px] flex items-center justify-center overflow-hidden cursor-pointer font-poppins relative"
                    onClick={() => handleClickOpen(graphicProject.pic)}
                  >
                    <img
                      component="image"
                      src={graphicProject.pic}
                      alt={`Graphic-Project ${graphicProject.id}`}
                    />
                    <div className="absolute bg-[#d9d9d978] px-9 py-2 left-[-15px] bottom-5 rounded-[18px]">
                      <span className="relative top-0 text-textColor font-poppins uppercase text-lg">
                        {graphicProject.btnText}
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
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <Box className="flex items-center justify-center">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 aspect-video">
                  <iframe
                    src={video1Url}
                    // width="100%"
                    // height="100%"
                    playsInline
                    autoPlay
                    loop
                    muted
                    className="border-0 rounded-[18px]"
                  ></iframe>
                </div>
              </Box>
            </Dialog>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default ThreeD;
