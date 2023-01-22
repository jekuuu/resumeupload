import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";

import { COVER_LETTER, CV } from "../../AppConstants";

const UploadDocuments = ({ handleBack, handleNext, activeStep }) => {
  const dispatch = useDispatch();
  const [selectedCV, setSelectedCV] = useState("No file selected");
  const [selectedCL, setSelectedCL] = useState("No file selected");
  const [isCVSelected, setIsCVSelected] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === CV) {
      setSelectedCV(value);
      setIsCVSelected(true);
    } else {
      setSelectedCL(value);
    }
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography>{selectedCV}</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" component="label" required>
              Upload CV
              <input
                required
                type="file"
                accept="application/pdf,application/msword"
                hidden
                name={CV}
                onChange={handleChange}
              />
            </Button>
            {!isCVSelected && (
              <Typography sx={{ color: "red", mt: 1 }}>
                CV is Required
              </Typography>
            )}
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

        <Button type="submit" disabled={!isCVSelected}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default UploadDocuments;
