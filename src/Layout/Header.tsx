import React from "react";
import NavBar from "../Containers/NavBar";
import bgpic from "../assets/images/cakeBG.jpg";
import { Box, Typography } from "@mui/material";

const sectionStyle = {
  height: "100vh",

  backgroundImage: `url(${bgpic})`,

  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export const Header = () => {
  return (
    <Box style={sectionStyle}>
      <NavBar />
    </Box>
  );
};
