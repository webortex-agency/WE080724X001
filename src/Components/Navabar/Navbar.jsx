import React, { useState } from "react";
import {
  Avatar,
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import logoImg from "../../assets/logo.png";
import DrawerComp from "./DrawerComp";

const pages = ["Home", "Services", "Projects", "Team", "About"];

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
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
    <div className="flex justify-center items-center ">
      <AppBar
        className="bg-transparent shadow-none border-none mt-2 pt-2 flex justify-center"
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
              <DrawerComp sx={{ boxSizing: "border-box", width: "240px" }} />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                className="ms-auto"
              >
                {pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    className="text-navlinkColor font-poppins"
                  />
                ))}
              </Tabs>
              <Button
                variant="contained"
                className="text-buttonTextColor bg-buttonBgColor ml-2"
                sx={{ borderRadius: "5px" }}
              >
                Let's Talk
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
