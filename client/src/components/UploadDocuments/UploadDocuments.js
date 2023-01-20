import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const UploadDocuments = () => {
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
            />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadDocuments;
