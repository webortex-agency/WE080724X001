import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Consumer } from "../Context/Context";

const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const Marquee = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const ClientsCompo = () => {
  return (
    <Consumer>
      {(value) => {
        const { clientsComponent } = value;
        return (
          <Box className="relative w-full my-5 pt-5 pb-10 overflow-hidden flex justify-center items-center">
            <ScrollingContainer className="self-center">
              <Marquee className="grid grid-cols-7 md:grid-cols-none md:grid-flow-col">
                {clientsComponent.map((clientComponent) => (
                  <Box
                    key={`image-${clientComponent.id}`}
                    component="img"
                    src={clientComponent.src}
                    alt={`Image ${clientComponent.id}`}
                    className="me-1 my-2 w-16 h-12 sm:w-24 sm:h-20 md:w-14 md:h-12 lg:w-20 lg:h-16 xl:w-24 xl:h-20"
                    sx={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                ))}
              </Marquee>
            </ScrollingContainer>
          </Box>
        );
      }}
    </Consumer>
  );
};

export default ClientsCompo;
