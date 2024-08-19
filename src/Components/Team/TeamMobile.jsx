import "./styles.css";
import { motion } from "framer-motion";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import Insta from "../../assets/Social/instagram.png";
import fb from "../../assets/Social/facebook.png";
import x from "../../assets/Social/twitter.png";
import { Handshake } from "@mui/icons-material";
import { Consumer } from "../Context/Context";

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

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({
  pic,
  fname,
  lname,
  role,
  hueA,
  hueB,
  insta,
  facebook,
  twitter,
}) {
  return (
    <Consumer>
      {(value) => {
        const { teamMembers } = value;
        const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(
          hueB
        )})`;

        return (
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="splash" style={{ background }} />
            <motion.div className="card" variants={cardVariants}>
              <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
                <img
                  src={pic}
                  alt={`team-mem-${teamMembers.id}`}
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
                    {fname} {lname}
                  </Typography>
                  <Typography className="text-base font-poppins text-[#555555]">
                    {role}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "center", padding: 2 }}
                >
                  {teamMembers.insta != "" ? (
                    <IconButton>
                      <Link href={insta}>
                        <img src={Insta} alt="Instagram" width={25}></img>
                      </Link>
                    </IconButton>
                  ) : null}
                  {teamMembers.fb != "" ? (
                    <IconButton>
                      <Link href={facebook}>
                        <img src={fb} alt="Instagram" width={20}></img>
                      </Link>
                    </IconButton>
                  ) : null}
                  {teamMembers.x != "" ? (
                    <IconButton>
                      <Link href={twitter}>
                        <img src={x} alt="Instagram" width={20}></img>
                      </Link>
                    </IconButton>
                  ) : null}
                </Box>
              </div>
            </motion.div>
          </motion.div>
        );
      }}
    </Consumer>
  );
}

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const TeamMobile = () => {
  return (
    <Consumer>
      {(value) => {
        const { teamMembers } = value;

        return (
          <div style={{ marginBottom: "150px" }}>
            <Grid container className="flex flex-col items-center">
              <Handshake
                sx={{ fontSize: 35 }}
                className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full "
              />
              <div className="my-5 text-center">
                <Typography
                  className="text-[15px] text-[#D0D0D0] font-poppins"
                  sx={{ letterSpacing: "3px", textTransform: "uppercase" }}
                >
                  <span className="text-[#5956E8] mx-1">//</span>
                  05 . Our Team
                </Typography>
                <Typography
                  variant="h4"
                  className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center  font-poppins font-normal mt-4"
                >
                  Meet Our Team Experts
                </Typography>
              </div>
            </Grid>
            {teamMembers.map((teamMember) => (
              <Card
                key={`Team-Mem ${teamMember.id}`}
                pic={teamMember.pic}
                fname={teamMember.FirstName}
                lname={teamMember.LastName}
                role={teamMember.Role}
                hueA={teamMember.hueA}
                hueB={teamMember.hueB}
                insta={teamMember.insta}
                facebook={teamMember.fb}
                twitter={teamMember.x}
              />
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

export default TeamMobile;
