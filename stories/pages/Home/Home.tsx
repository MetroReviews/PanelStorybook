import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import { NavbarComponent } from "../../components/Navbar/Navbar";

export const Home = (props) => {
  return (
    <>
      <NavbarComponent {...props.Navbar} />
      <Box p={4}>
        <Heading size={props.headingSize}>{props.headingLabel}</Heading>
      </Box>
    </>
  );
};
