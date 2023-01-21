import React from "react";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";

import SubmitButton from "../Button";
import { COVER_LETTER, CV } from "../../AppConstants";

const UploadDocuments = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Button variant="contained" component="label" required>
            Upload CV
            <input
              type="file"
              accept="application/pdf,application/msword"
              hidden
              name={CV}
              onChange={handleChange}
            />
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" component="label">
            Upload Cover Letter
            <input
              type="file"
              accept="application/pdf,application/msword"
              hidden
              name={COVER_LETTER}
              onChange={handleChange}
            />
          </Button>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </Container>
  );
};

export default UploadDocuments;
