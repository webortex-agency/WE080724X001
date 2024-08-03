import React, { useState } from "react";
import {
  Avatar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  createTheme,
  Container,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import DrawerComp from "./DrawerComp";

const pages = ["Home", "Services", "Projects", "Team", "About"];

const CustomTabs = styled(Tabs)(({ theme }) => ({
  "& .css-1aquho2-MuiTabs-indicator": {
    backgroundColor: "#5A56E8",
  },
}));

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = createTheme({
    breakpoints: {
      values: {
        "2xs": 0,
        xs: 425,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
  });
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="lg" className="md:flex md:justify-center">
      <div
        className="bg-transparent shadow-none border-none mt-2 pt-2 md:flex md:justify-center"
        position="fixed"
      >
        <Toolbar className="align-middle">
          <Avatar
            alt="64 FRAMEZ"
            src={logoImg}
            sx={{ height: "100px", width: "100px" }}
          />

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <CustomTabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                className="ml-0 md:ml-auto h-12 mx-0 md:mx-5 lg:mx-8"
              >
                {pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="text-navlinkColor font-poppins text-xs lg:text-sm mx-0"
                      >
                        {page}
                      </Link>
                    }
                  />
                ))}
              </CustomTabs>
              <Button
                variant="contained"
                className="text-buttonTextColor bg-buttonBgColor py-1 px-4 sm:py-2 sm:px-6 md:py-3 md:px-6  hover:bg-navlinkActiveColor hover:text-headColor rounded-lg font-semibold h-10 mx-auto md:mx-0 text-sm md:text-xs lg:text-sm text-nowrap"
                sx={{ transition: ".3s ease-in-out" }}
              >
                Let's Talk
              </Button>
            </>
          )}
        </Toolbar>
      </div>
    </Container>
  );
};

export default Navbar;
