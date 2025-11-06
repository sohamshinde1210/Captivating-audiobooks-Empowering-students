import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import emergingTrendsComputerGroup from "../Assets/emergingTrendsComputerGroup.pdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Books = () => {

  return (
    <div>
      <Navbar />
      <br />
      <br /> <br />
      <br /> <br />
      <Box m="8">
        <Box w="80%" m="auto">
          <iframe
            src={emergingTrendsComputerGroup}
            width="1000px"
            height="1000px"
          />
        </Box>
      </Box>
      <br />
      <br /> <br />
      <br /> <br />
      <Footer />
    </div>
  );
};

export default Books;
