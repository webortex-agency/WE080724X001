import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import process1 from "../../assets/Process/process1.svg";
import process2_1 from "../../assets/Process/process2_1.svg";
import process2_2 from "../../assets/Process/process2_2.svg";
import process2_3 from "../../assets/Process/process2_3.svg";
import process3 from "../../assets/Process/process3.svg";
import ladder from "../../assets/Process/ladder.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Process() {
  const controls1 = useAnimation();
  const controls2_1 = useAnimation();
  const controls2_2 = useAnimation();
  const controls2_3 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2_1, inView: inView2_1 } = useInView({ threshold: 0.1 });
  const { ref: ref2_2, inView: inView2_2 } = useInView({ threshold: 0.1 });
  const { ref: ref2_3, inView: inView2_3 } = useInView({ threshold: 0.1 });
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
      style={{
        background:
          "linear-gradient(111.05deg, #E9F7FF 9.66%, #FFDBD5 57.52%, #FFF3CA 103.42%)",
        overflowX: "hidden",
      }}
    >
      <div className="flex-col flex justify-center items-center">
        <img src={ladder} alt="logo" width={105} height={105} />
        <div style={{ width: "500px" }}>
          <Typography
            sx={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
          >
            03 . Process
          </Typography>
          <Typography
            sx={{ fontSize: "40px", textAlign: "center", marginBottom: "50px" }}
          >
            A simple, yet powerful and efficient process
          </Typography>
        </div>
      </div>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          color="text.secondary"
        >
          <div ref={ref1} className="flex justify-end items-end w-full pr-0">
            <motion.img
              src={process1}
              alt="Process Step 1"
              className="w-full sm:w-2/3 md:w-1/2 lg:w-2/4 mb-28"
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
            <Typography variant="h6" component="span" sx={{ fontSize: "25px" }}>
              Marketing Plan
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              We are here to assist with a marketing plan that will provide
              incredible and outstanding results in line with your goal.
            </Typography>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ display: "flex", justifyContent: "flex-start" }}
          color="text.secondary"
        >
          <div className="flex flex-col justify-start items-start py-0">
            <div ref={ref2_1} className="flex justify-start items-start">
              <motion.img
                src={process2_1}
                alt="Process Step 2.1"
                className="w-full sm:w-2/3 md:w-2/3 lg:w-3/4 mb-28"
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
                className="w-full sm:w-2/3 md:w-2/3 lg:w-3/4 mb-28"
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
                className="w-full sm:w-2/3 md:w-2/3 lg:w-3/4 mb-28"
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
            <Typography variant="h6" component="span" sx={{ fontSize: "25px" }}>
              Marketing Plan
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              We are here to assist with a marketing plan that will provide
              incredible and outstanding results in line with your goal.
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
            marginTop: "-100px",
          }}
          color="text.secondary"
        >
          <div ref={ref3} className="flex justify-end items-start w-full pr-0">
            <motion.img
              src={process3}
              alt="Process Step 3"
              className="w-full sm:w-2/3 md:w-1/2 lg:w-2/4"
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
        <TimelineContent sx={{ py: "12px", px: 2, marginTop: "-20px" }}>
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2"
            initial="hidden"
            animate={controls3}
            variants={textVariants}
          >
            <Typography variant="h6" component="span" sx={{ fontSize: "25px" }}>
              Growth & Scale
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              As previously stated, we are here to support your growth and we
              nearly guarantee that you will see 100% success in your digital or
              social media marketing endeavors.
            </Typography>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
