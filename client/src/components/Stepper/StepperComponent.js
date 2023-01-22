import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { CircularProgress, Container } from "@mui/material";

import BasicDetails from "../BasicDetails/BasicDetails";
import UploadDocuments from "../UploadDocuments/UploadDocuments";
import SnackbarComponent from "../Snackbar/SnackbarComponent";
import { RESET } from "../../AppConstants";

const steps = ["Basic Details", "Upload Documents"];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
      });
    dispatch({ type: RESET });
    resetState();
  };

  const resetState = () => {
    setIsSuccess(false);
    setIsError(false);
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
    <Box sx={{ m: "auto", maxWidth: "md" }}>
      {isSuccess && <SnackbarComponent isOpen />}
      {isError && <SnackbarComponent isOpen isError />}
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
        <Container maxWidth="md" sx={{ mt: 5 }}>
          {!isSuccess && !isError && (
            <>
              Saving your profile... <CircularProgress />
            </>
          )}
          <Typography sx={{ mt: 2, mb: 1 }}>
            {isSuccess && "Profile submitted successfully"}
            {isError && "Please try again"}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Go To Home</Button>
          </Box>
        </Container>
      ) : (
        <React.Fragment>
          {activeStep + 1 === 1 && (
            <BasicDetails
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
            />
          )}
          {activeStep + 1 === 2 && (
            <UploadDocuments
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
            />
          )}
        </React.Fragment>
      )}
    </Box>
  );
}
