import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { Handshake } from "@mui/icons-material";
import Insta from "../../assets/Social/instagram.png";
import fb from "../../assets/Social/facebook.png";
import x from "../../assets/Social/twitter.png";
import { Consumer } from "../Context/Context";

const Team = () => {
  return (
    <Consumer>
      {(value) => {
        const { teamMembers } = value;
        return (
          <Container className="pt-16 pb-20">
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

            <Box className="gap-x-7 gap-y-8 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {teamMembers.map((teamMember) => (
                <div
                  className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full"
                  key={teamMember.id}
                >
                  <img
                    src={teamMember.pic}
                    alt={`team-mem-${teamMember.id}`}
                    className="rounded-t-lg"
                    style={{
                      height: "220px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

                  <Box>
                    <Typography className="pt-2 font-semibold font-poppins text-lg">
                      {teamMember.FirstName} {teamMember.LastName}
                    </Typography>
                    <Typography className="text-sm font-poppins text-[#555555] font-normal">
                      {teamMember.Role}
                    </Typography>
                  </Box>
                  <Box className="justify-self-center mt-2">
                    {teamMember.insta != "" ? (
                      <IconButton>
                        <Link href={teamMember.insta}>
                          <img src={Insta} alt="Instagram" width={25}></img>
                        </Link>
                      </IconButton>
                    ) : null}
                    {teamMember.fb != "" ? (
                      <IconButton>
                        <Link href={teamMember.fb}>
                          <img src={fb} alt="FaceBook" width={20}></img>
                        </Link>
                      </IconButton>
                    ) : null}
                    {teamMember.x != "" ? (
                      <IconButton>
                        <Link href={teamMember.x}>
                          <img src={x} alt="twitter" width={20}></img>
                        </Link>
                      </IconButton>
                    ) : null}
                  </Box>
                </div>
              ))}
            </Box>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default Team;
