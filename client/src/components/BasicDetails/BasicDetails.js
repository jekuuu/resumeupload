import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  ABOUT_YOU,
  EMAIL,
  FIRST_NAME,
  GIT_PROFILE,
  LAST_NAME,
  LIVE_IN_US,
  PHONE_NUMBER,
} from "../../AppConstants";

const BasicDetails = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleCheckbox = (e) => {
    let { name, checked } = e.target;
    dispatch({ type: name, payload: checked });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-basic"
            label="First Name"
            variant="standard"
            name={FIRST_NAME}
            value={data[FIRST_NAME]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            name={LAST_NAME}
            onChange={handleChange}
            value={data[LAST_NAME]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            name={EMAIL}
            onChange={handleChange}
            value={data[EMAIL]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            sx={{ width: "100%" }}
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
                  value={data[LIVE_IN_US]}
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
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Git Profile"
            variant="standard"
            name={GIT_PROFILE}
            onChange={handleChange}
            value={data[GIT_PROFILE]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            sx={{ width: "100%" }}
            label="About you"
            id="standard-multiline-static"
            multiline
            maxRows={4}
            variant="standard"
            name={ABOUT_YOU}
            onChange={handleChange}
            value={data[ABOUT_YOU]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicDetails;
