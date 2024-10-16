import "./styles.css";
import { motion } from "framer-motion";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import Insta from "../../assets/Social/instagram.png";
import fb from "../../assets/Social/facebook.png";
import x from "../../assets/Social/twitter.png";
import { Handshake } from "@mui/icons-material";
import teamMember1 from "../../assets/TeamMembers/pavan.jpg";
import teamMember2 from "../../assets/TeamMembers/vinay.jpg";
import teamMember3 from "../../assets/TeamMembers/hitesh.jpg";
import teamMember4 from "../../assets/TeamMembers/pruthvi raj.jpg";
import teamMember5 from "../../assets/TeamMembers/indu.jpg";
import teamMember6 from "../../assets/TeamMembers/rishitha.jpg";
import teamMember7 from "../../assets/TeamMembers/Prathyusha.jpg";
import teamMember8 from "../../assets/TeamMembers/gnana.jpg";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamMobile = () => {
  return (
    <div style={{ marginBottom: "150px" }} id="team">
      <Grid container className="flex flex-col items-center">
        <Handshake
          sx={{ fontSize: 35 }}
          className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full "
        />
        <div className="my-5 text-center">
          <Typography
            variant="h4"
            className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center font-poppins font-normal"
          >
            Meet Our Team Experts
          </Typography>
        </div>
      </Grid>

      {/* Team Member 1 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(340, 100%, 50%), hsl(10, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember1}
              alt="team-mem-1"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Angeri Pavan Reddy
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Co-Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 2 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(20, 100%, 50%), hsl(40, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember2}
              alt="team-mem-2"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                CH Vinay
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Co-Founder
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 3 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(60, 100%, 50%), hsl(90, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember3}
              alt="team-mem-3"
              className="rounded-t-lg"
              style={{
                height: "270px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Hitesh Mehra
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 4 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(80, 100%, 50%), hsl(120, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember4}
              alt="team-mem-4"
              className="rounded-t-lg"
              style={{
                height: "264px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Pruthvi Raj
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Project Manager
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 5 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(320, 100%, 50%), hsl(360, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember5}
              alt="team-mem-5"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Indu T
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 6 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(205, 100%, 50%), hsl(245, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember6}
              alt="team-mem-6"
              className="rounded-t-lg"
              style={{
                height: "220px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Rishitha
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 7 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(260, 100%, 50%), hsl(290, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember7}
              alt="team-mem-7"
              className="rounded-t-lg"
              style={{
                height: "260px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                Prathyusha
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Creative Director
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Member 8 */}
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div
          className="splash"
          style={{
            background:
              "linear-gradient(306deg, hsl(290, 100%, 50%), hsl(320, 100%, 50%))",
          }}
        />
        <motion.div className="card" variants={cardVariants}>
          <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
            <img
              src={teamMember8}
              alt="team-mem-8"
              className="rounded-t-lg"
              style={{
                height: "230px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Grid
              sx={{
                border: "2px solid #5956E8",
                marginTop: 2,
                marginLeft: "30%",
                marginRight: "30%",
                borderRadius: "10px",
                backgroundColor: "#5956E8",
              }}
            ></Grid>
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                S Gnana Sekhar
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                Web Developer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
              <IconButton>
                <Link href="https://www.instagram.com/">
                  <img src={Insta} alt="Instagram" width={25}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.facebook.com/">
                  <img src={fb} alt="Facebook" width={20}></img>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://x.com/?lang=en">
                  <img src={x} alt="Twitter" width={20}></img>
                </Link>
              </IconButton>
            </Box>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamMobile;
