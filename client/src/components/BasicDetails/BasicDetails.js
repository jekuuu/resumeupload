import React from "react";
import { Checkbox, Container, Grid } from "@mui/material";
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
import TextField from "../TextField/TextFieldWrapper";

const BasicDetails = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label="First Name" name={FIRST_NAME} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Last Name" name={LAST_NAME} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField label="Email" name={EMAIL} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField label="Phone Number" name={PHONE_NUMBER} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Checkbox
            name={LIVE_IN_US}
            legend="Do you live in US?"
            label="Do you live in US?"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField label="Git Profile" name={GIT_PROFILE} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="About you"
            id="standard-multiline-static"
            multiline
            maxRows={4}
            variant="standard"
            name={ABOUT_YOU}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicDetails;
