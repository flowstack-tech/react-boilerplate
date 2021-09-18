import React from "react";

import { Button as LibButton, ButtonProps as LibButtonProps } from "@material-ui/core";

export type ButtonProps = LibButtonProps;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <LibButton {...rest} />;
};

export default Button;
