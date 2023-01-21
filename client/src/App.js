import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import StepperComponent from "./components/Stepper/StepperComponent";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <StepperComponent />
      </Box>
    </>
  );
};

export default App;
