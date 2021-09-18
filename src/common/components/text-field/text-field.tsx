import React from "react";

import { TextField as LibTextField, TextFieldProps as LibTextFieldProps } from "@material-ui/core";

export type TextFieldProps = LibTextFieldProps;

const TextField: React.FC<TextFieldProps> = ({ variant = "filled", ...rest }) => {
  return <LibTextField variant={variant} {...rest} />;
};

export default TextField;
