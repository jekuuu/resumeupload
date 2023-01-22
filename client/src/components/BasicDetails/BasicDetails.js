import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import TextFieldWrapper from "../TextField";
import {
  ABOUT_YOU,
  EMAIL,
  FIRST_NAME,
  GIT_PROFILE,
  LAST_NAME,
  LIVE_IN_US,
  PHONE_NUMBER,
} from "../../AppConstants";

const BasicDetails = ({ handleBack, handleNext, activeStep }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleCheckbox = (e) => {
    let { name, checked } = e.target;
    dispatch({ type: name, payload: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              required
              type="text"
              label="First Name"
              name={FIRST_NAME}
              value={data[FIRST_NAME]}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              type="text"
              label="Last Name"
              name={LAST_NAME}
              onChange={handleChange}
              value={data[LAST_NAME]}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextFieldWrapper
              required
              type="email"
              label="Email"
              name={EMAIL}
              onChange={handleChange}
              value={data[EMAIL]}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextFieldWrapper
              type="tel"
              label="Phone Number"
              name={PHONE_NUMBER}
              onChange={handleChange}
              value={data[PHONE_NUMBER]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data[LIVE_IN_US]}
                    name={LIVE_IN_US}
                    required
                    onChange={handleCheckbox}
                  />
                }
                label="Do you live in US?"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextFieldWrapper
              required
              type="text"
              label="Git Profile"
              name={GIT_PROFILE}
              onChange={handleChange}
              value={data[GIT_PROFILE]}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextFieldWrapper
              type="text"
              required
              label="About you"
              multiline
              maxRows={4}
              name={ABOUT_YOU}
              onChange={handleChange}
              value={data[ABOUT_YOU]}
            />
          </Grid>
        </Grid>
      </Container>
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

        <Button type="submit">Next</Button>
      </Box>
    </form>
  );
};

export default BasicDetails;
