import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const pages = ["Home", "Services", "Projects", "Team", "About"];

const CustomizedDrawer = styled(Drawer)(({ theme }) => ({
  ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: "#171717;",
    width: "80%",
    height: "max-content",
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

  return (
    <React.Fragment>
      <CustomizedDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="temporary"
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ColoredButton
            variant="contained"
            className="font-semibold text-nowrap"
            sx={{ borderRadius: "5px" }}
          >
            Let's Talk
          </ColoredButton>
        </List>
      </CustomizedDrawer>

      <IconButton
        className="font-poppins text-buttonTextColor bg-buttonBgColor"
        sx={{ borderRadius: "5px", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
