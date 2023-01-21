import React from "react";
import { TextField } from "@mui/material";

const TextFieldWrapper = ({ isRequired = false, ...rest }) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      id="outlined-basic"
      variant="outlined"
      {...rest}
    />
  );
};

export default TextFieldWrapper;
