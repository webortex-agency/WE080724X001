import React from "react";
import { createTheme } from "@mui/material/styles";
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

const Team = () => {
  const TeamMembers = [
    {
      id: 1,
      FirstName: "Angeri",
      LastName: "Pavan Reddy",
      Role: "Founder",
      pic: "./src/assets/TeamMembers/pavan.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
    {
      id: 2,
      FirstName: "CH",
      LastName: "Vinay",
      Role: "Co-Founder",
      pic: "./src/assets/TeamMembers/vinay.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
    {
      id: 3,
      FirstName: "Nandha",
      LastName: "Kishore",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/profile.png",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "",
    },
    {
      id: 4,
      FirstName: "Nandha",
      LastName: "Kishore",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/profile.png",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "",
    },
    {
      id: 5,
      FirstName: "Indu",
      LastName: "T",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/indu.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
    {
      id: 6,
      FirstName: "Prathyusha",
      LastName: "",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/Prathyusha.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
    {
      id: 7,
      FirstName: "Rishitha",
      LastName: "",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/rishitha.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
    {
      id: 8,
      FirstName: "Rishitha",
      LastName: "",
      Role: "Lead Manager",
      pic: "./src/assets/TeamMembers/rishitha.jpg",
      insta: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
      x: "https://x.com/?lang=en",
    },
  ];
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

      <Box className="gap-x-4 gap-y-5 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TeamMembers.map((TeamMember) => (
          <div
            className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-lg hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full"
            key={TeamMember.id}
          >
            <img
              src={TeamMember.pic}
              alt={`team-mem-${TeamMember.id}`}
              style={{
                borderRadius: 10,
                height: "200px",
                width: "100%",
                aspectRatio: "auto",
              }}
            />
            <Box>
              <Typography className="pt-2 font-bold font-poppins">
                {TeamMember.FirstName} {TeamMember.LastName}
              </Typography>
              <Typography className="text-base font-poppins text-[#555555]">
                {TeamMember.Role}
              </Typography>
            </Box>
            <Box className="justify-self-center mt-1">
              {TeamMember.insta != "" ? (
                <IconButton>
                  <Link href={TeamMember.insta}>
                    <img src={Insta} alt="Instagram" width={25}></img>
                  </Link>
                </IconButton>
              ) : null}
              {TeamMember.fb != "" ? (
                <IconButton>
                  <Link href={TeamMember.fb}>
                    <img src={fb} alt="Instagram" width={20}></img>
                  </Link>
                </IconButton>
              ) : null}
              {TeamMember.x != "" ? (
                <IconButton>
                  <Link href={TeamMember.x}>
                    <img src={x} alt="Instagram" width={20}></img>
                  </Link>
                </IconButton>
              ) : null}
            </Box>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default Team;
