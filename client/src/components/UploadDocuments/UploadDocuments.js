import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";

import { COVER_LETTER, CV } from "../../AppConstants";

const UploadDocuments = () => {
  const dispatch = useDispatch();
  const [selectedCV, setSelectedCV] = useState("No file selected");
  const [selectedCL, setSelectedCL] = useState("No file selected");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === CV) {
      setSelectedCV(value);
    } else {
      setSelectedCL(value);
    }
    dispatch({ type: name, payload: value });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography>{selectedCV}</Typography>
        </Grid>
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

        <Grid item xs={12} md={12} sx={{ mt: 3 }}>
          <Typography>{selectedCL}</Typography>
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
      </Grid>
    </Container>
  );
};

export default UploadDocuments;
