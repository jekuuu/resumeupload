import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

import BasicDetails from "../BasicDetails/BasicDetails";
import UploadDocuments from "../UploadDocuments/UploadDocuments";
import { RESET } from "../../AppConstants";
import SnackbarComponent from "../Snackbar/SnackbarComponent";

const steps = ["Basic Details", "Upload Documents"];

export default function FormComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);

  const data = useSelector((state) => state);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/post", JSON.stringify(data))
      .then(function (response) {
        console.log(response);
        setIsSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch({ type: RESET });
    setIsSuccess(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ m: "auto", width: "50%" }}>
      {isSuccess && <SnackbarComponent isOpen />}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Go To Home</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep + 1 === 1 && <BasicDetails />}
          {activeStep + 1 === 2 && <UploadDocuments />}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
