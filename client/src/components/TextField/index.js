import React from "react";
import { TextField } from "@mui/material";

const TextFieldWrapper = ({ isRequired = false, ...rest }) => {
  return (
    <TextField id="outlined-basic" variant="outlined" fullWidth {...rest} />
  );
};

export default TextFieldWrapper;
