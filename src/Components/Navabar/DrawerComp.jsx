import React, { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  styled,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Consumer } from "../Context/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CustomizedDrawer = styled(Drawer)(({ theme }) => ({
  ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: "#171717;",
    width: "80%",
    height: "40%",
  },
  ".css-h4y409-MuiList-root": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px",
    "& *": {
      color: "#ffffff",
      fontFamily: "Poppins",
      justifyContent: "center",
    },
  },
  ".css-h0hvpu-MuiButtonBase-root-MuiButton-root": {
    width: "60%",
    justifyContent: "center",
    marginLeft: "20%",
    marginRight: "20%",
  },
}));

const ColoredButton = styled(Button)(({ theme }) => ({
  background: "#ffffff",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#171717 !important",
  marginTop: "30px",
  marginBottom: "20px",
  transition: ".4s ease",
  "&:hover": {
    backgroundColor: "#5a56e8",
    color: "#ffffff !important",
    transition: ".5s ease",
  },
}));

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (navbarLink) => {
    if (navbarLink.type === "section") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(navbarLink.path), 100);
      } else {
        scrollToSection(navbarLink.path);
      }
    } else {
      navigate(navbarLink.path);
    }
  };

  return (
    <Consumer>
      {(value) => {
        const { navbarLinks } = value;
        return (
          <>
            <CustomizedDrawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              variant="temporary"
            >
              <List>
                {navbarLinks.map((navbarLink) => (
                  <ListItemButton
                    onClick={() => setOpenDrawer(false)}
                    key={`Link ${navbarLink.id}`}
                  >
                    <ListItemIcon>
                      <ListItemText>
                        <span
                          onClick={() => handleNavigation(navbarLink)}
                          className="text-navlinkColor font-poppins text-xs lg:text-sm mx-0 cursor-pointer"
                        >
                          {navbarLink.pageName}
                        </span>
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                ))}
                <Link
                  to="/contact"
                  className="w-[200px]"
                  onClick={() => setOpenDrawer(false)}
                >
                  <ColoredButton
                    variant="contained"
                    className="font-semibold text-nowrap"
                    sx={{ borderRadius: "5px" }}
                  >
                    Let's Talk
                  </ColoredButton>
                </Link>
              </List>
            </CustomizedDrawer>

            <IconButton
              className="font-poppins text-buttonTextColor bg-buttonBgColor"
              sx={{ borderRadius: "5px", marginLeft: "auto" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Menu />
            </IconButton>
          </>
        );
      }}
    </Consumer>
  );
};

export default DrawerComp;
