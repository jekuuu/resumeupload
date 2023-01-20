import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarComponent = ({ isOpen }) => {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Profile saved successfully!
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
