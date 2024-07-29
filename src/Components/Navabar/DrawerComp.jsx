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

const CustomizedDrawer = styled(Drawer)`
  background-color: #171717;
  color: #ffffff;
  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    background-color: #171717;
    color: #ffffff;
  }
`;

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
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
          <Button
            variant="contained"
            className="text-buttonTextColor bg-buttonBgColor"
            sx={{ borderRadius: "5px" }}
          >
            Let's Talk
          </Button>
        </List>
      </Drawer>

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
