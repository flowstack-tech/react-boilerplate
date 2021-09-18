import React from "react";

import { ButtonGroup as LibButtonGroup, ButtonGroupProps as LibButtonGroupProps } from "@material-ui/core";

export type ButtonGroupProps = LibButtonGroupProps;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ ...rest }) => {
  return <LibButtonGroup {...rest} />;
};

export default ButtonGroup;
