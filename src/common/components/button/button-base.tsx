import React from "react";

import { ButtonBase as LibButtonBase, ButtonBaseProps as LibButtonBaseProps } from "@material-ui/core";

export type ButtonBaseProps = LibButtonBaseProps;

const ButtonBase: React.FC<ButtonBaseProps> = ({ ...rest }) => {
  return <LibButtonBase {...rest} />;
};

export default ButtonBase;
