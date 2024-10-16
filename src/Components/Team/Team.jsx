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
import TeamImg1 from "../../assets/TeamMembers/pavan.jpg";
import TeamImg2 from "../../assets/TeamMembers/vinay.jpg";
import TeamImg3 from "../../assets/TeamMembers/hitesh.jpg";
import TeamImg4 from "../../assets/TeamMembers/pruthvi raj.jpg";
import TeamImg5 from "../../assets/TeamMembers/indu.jpg";
import TeamImg6 from "../../assets/TeamMembers/rishitha.jpg";
import TeamImg7 from "../../assets/TeamMembers/Prathyusha.jpg";
import TeamImg8 from "../../assets/TeamMembers/gnana.jpg";

const Team = () => {
  return (
    <Container className="pt-16 pb-20">
      <Grid container className="flex flex-col items-center">
        <Handshake
          sx={{ fontSize: 35 }}
          className="bg-iconBgColor text-iconColor h-[70px] w-[70px] p-[14px] rounded-full "
        />
        <div className="my-5 text-center">
          <Typography
            variant="h4"
            className="text-2xl sm:text-3xl md:text-xl lg:text-4xl text-headColor px-5 md:px-0 text-center  font-poppins font-normal mt-4"
          >
            Meet Our Team Experts
          </Typography>
        </div>
      </Grid>

      <Box className="gap-x-7 gap-y-8 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Team Member 01 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg1}
            alt="Team Member 01"
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
              Angeri Pavan Reddy
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Co-Founder
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 01 */}
        {/* Team Member 02 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg2}
            alt="Team Member 01"
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
              CH Vinay
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Co-Founder
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 02 */}
        {/* Team Member 03 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg3}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "235px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Hitesh Mehra
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Creative Director
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 03 */}
        {/* Team Member 04 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg4}
            alt="Team Member 01"
            className="rounded-t-lg"
            style={{
              height: "235px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <hr className="border-iconBgColor border-b-[1.6px] border-solid mt-5 mb-2 w-[60px] mx-auto" />

          <Box>
            <Typography className="pt-2 font-semibold font-poppins text-lg">
              Prudhvi Raj
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Project Manager
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 04 */}
        {/* Team Member 05 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg5}
            alt="Team Member 01"
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
              Indu T
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Creative Director
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 05 */}
        {/* Team Member 06 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg6}
            alt="Team Member 01"
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
              Rishita
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Creative Director
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 06 */}
        {/* Team Member 06 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg7}
            alt="Team Member 01"
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
              Prathyisha
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Creative Director
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 06 */}
        {/* Team Member 07 */}
        <div className="bg-headColor font-poppins p-6 text-center mt-1 cursor-pointer rounded-3xl hover:bg-gradient-to-tr from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] transition-all duration-500 ease-in-out w-full">
          <img
            src={TeamImg8}
            alt="Team Member 01"
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
              S Gnana Sekhar
            </Typography>
            <Typography className="text-sm font-poppins text-[#555555] font-normal">
              Web Developer
            </Typography>
          </Box>
          <Box className="justify-self-center mt-2">
            {/* {teamMember.insta != "" ? ( */}
            <IconButton>
              <Link href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" width={25}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.fb != "" ? ( */}
            <IconButton>
              <Link href="https://www.facebook.com/">
                <img src={fb} alt="FaceBook" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
            {/* {teamMember.x != "" ? ( */}
            <IconButton>
              <Link href="https://x.com/?lang=en">
                <img src={x} alt="twitter" width={20}></img>
              </Link>
            </IconButton>
            {/* ) : null} */}
          </Box>
        </div>
        {/* Team Member 07 */}
      </Box>
    </Container>
  );
};

export default Team;
