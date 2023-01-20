import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

const BasicDetails = () => {
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
            name="first_name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            name="last_name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            sx={{ width: "100%" }}
            name="phone_number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked name="live_in_us" required />}
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
            name="git_profile"
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
            name="about_you"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicDetails;
