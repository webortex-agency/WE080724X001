import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import process1 from "../../assets/Process/Creative.png";
import process2_1 from "../../assets/Process/process2_1.svg";
import process2_2 from "../../assets/Process/process2_2.svg";
import process2_3 from "../../assets/Process/process2_3.svg";
import process3 from "../../assets/Process/support.png";
import ladder from "../../assets/Process/ladder.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Process() {
  const controls1 = useAnimation();
  const controls2_1 = useAnimation();
  const controls2_2 = useAnimation();
  const controls2_3 = useAnimation();
  const controls3 = useAnimation();
  const isMobile = useMediaQuery("(max-width:600px)");

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2_1, inView: inView2_1 } = useInView({ threshold: 0.4 });
  const { ref: ref2_2, inView: inView2_2 } = useInView({ threshold: 0.4 });
  const { ref: ref2_3, inView: inView2_3 } = useInView({ threshold: 0.4 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2_1) controls2_1.start("visible");
    if (inView2_2) controls2_2.start("visible");
    if (inView2_3) controls2_3.start("visible");
    if (inView3) controls3.start("visible");
  }, [
    controls1,
    controls2_1,
    controls2_2,
    controls2_3,
    controls3,
    inView1,
    inView2_1,
    inView2_2,
    inView2_3,
    inView3,
  ]);

  const imageVariants = {
    hidden: { x: "-200vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Timeline
      position="alternate"
      className="pt-10 pb-16"
      style={{
        background:
          "linear-gradient(111.05deg, #E9F7FF 9.66%, #FFDBD5 57.52%, #FFF3CA 103.42%)",
        overflowX: "hidden",
        fontFamily: "Poppins, regular", // Apply Poppins font
      }}
    >
      <div className="flex-col flex justify-center items-center my-10">
        <img
          src={ladder}
          alt="logo"
          className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full"
        />
        <div style={{ width: "500px" }}>
          <Typography
            className="text-[15px] text-backgroundColor font-poppins text-center mt-4"
            sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
          >
            <span className="text-[#5956E8] mx-1">//</span>
            03 . Process
          </Typography>
          <Typography
            variant="h4"
            className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl text-center font-poppins font-normal mt-4"
          >
            A simple, yet powerful and efficient process
          </Typography>
        </div>
      </div>

      <TimelineItem className="my-5">
        <TimelineOppositeContent
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontFamily: "Poppins, regular", // Apply Poppins font
          }}
          color="text.secondary"
        >
          <div ref={ref1} className="flex justify-end items-end w-full pr-0">
            <motion.img
              src={process1}
              alt="Process Step 1"
              className="mb-28"
              style={{
                width: isMobile ? "80%" : "50%", // Increased size for mobile
              }}
              initial="hidden"
              animate={controls1}
              variants={imageVariants}
            />
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <div
            className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full"
            style={{ backgroundColor: "#FFD1C8" }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <span className="text-black text-lg font-bold">1</span>
            </div>
          </div>
          <TimelineConnector
            sx={{ borderStyle: "dotted", borderWidth: "2px" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2"
            initial="hidden"
            animate={controls1}
            variants={textVariants}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: isMobile ? "20px" : "25px",
                fontFamily: "Poppins, regular", // Apply Poppins font
              }}
            >
              Creative Process and Strategy
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "15px" : "18px",
                fontFamily: "Poppins, regular",
              }}
            >
              {isMobile
                ? "From discovery to planning, we bring your vision to life."
                : "We transform your vision into reality through discovery, conceptualization, and detailed planning."}
            </Typography>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontFamily: "Poppins, regular", // Apply Poppins font
          }}
          color="text.secondary"
        >
          <div className="flex flex-col justify-start items-start py-0">
            <div ref={ref2_1} className="flex justify-start items-start">
              <motion.img
                src={process2_1}
                alt="Process Step 2.1"
                className="mb-28"
                style={{
                  width: isMobile ? "80%" : "70%", // Increased size for mobile
                }}
                initial="hidden"
                animate={controls2_1}
                variants={textVariants}
              />
            </div>
            <div
              ref={ref2_2}
              className="flex justify-start items-start w-full pr-4"
              style={{ marginTop: "-100px" }}
            >
              <motion.img
                src={process2_2}
                alt="Process Step 2.2"
                className="mb-28"
                style={{
                  width: isMobile ? "80%" : "70%", // Increased size for mobile
                }}
                initial="hidden"
                animate={controls2_2}
                variants={textVariants}
              />
            </div>
            <div
              ref={ref2_3}
              className="flex justify-start items-start w-full pr-4"
              style={{ marginTop: "-100px" }}
            >
              <motion.img
                src={process2_3}
                alt="Process Step 2.3"
                className="mb-28"
                style={{
                  width: isMobile ? "80%" : "70%", // Increased size for mobile
                }}
                initial="hidden"
                animate={controls2_3}
                variants={textVariants}
              />
            </div>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <div
            className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full"
            style={{ backgroundColor: "#FFD1C8" }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <span className="text-black text-lg font-bold">2</span>
            </div>
          </div>
          <TimelineConnector
            sx={{ borderStyle: "dotted", borderWidth: "2px" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2"
            initial="hidden"
            animate={controls2_1}
            variants={imageVariants}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: isMobile ? "20px" : "25px",
                fontFamily: "Poppins, regular", // Apply Poppins font
              }}
            >
              Design, Development, and Feedback
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "15px" : "18px",
                fontFamily: "Poppins, regular",
              }}
            >
              {isMobile
                ? "Crafting and refining your project with continuous improvement."
                : "We create and refine your project through design, development, and ongoing feedback."}
            </Typography>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            marginTop: isMobile ? "20px" : "-100px", // Add margin on top for mobile
            fontFamily: "Poppins, regular", // Apply Poppins font
          }}
          color="text.secondary"
        >
          <div ref={ref3} className="flex justify-end items-start w-full pr-0">
            <motion.img
              src={process3}
              alt="Process Step 3"
              style={{
                width: isMobile ? "80%" : "50%", // Increased size for mobile
                marginTop: isMobile ? "0px" : "30px",
              }}
              initial="hidden"
              animate={controls3}
              variants={imageVariants}
            />
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <div
            className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full"
            style={{ backgroundColor: "#FFD1C8" }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <span className="text-black text-lg font-bold">3</span>
            </div>
          </div>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2"
            initial="hidden"
            animate={controls3}
            variants={textVariants}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: isMobile ? "20px" : "25px",
                fontFamily: "Poppins, regular", // Apply Poppins font
              }}
            >
              Finalization and Support
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "15px" : "18px",
                fontFamily: "Poppins, regular",
              }}
            >
              {isMobile
                ? "Seamless project completion with ongoing support."
                : "We finalize your project with feedback and offer continuous customer support."}
            </Typography>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
