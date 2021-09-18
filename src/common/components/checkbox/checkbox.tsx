import React from "react";

import { Checkbox as LibCheckbox, CheckboxProps as LibCheckboxProps } from "@material-ui/core";

export type CheckboxProps = LibCheckboxProps;

const Checkbox: React.FC<CheckboxProps> = ({ ...rest }) => {
  return <LibCheckbox {...rest} />;
};

export default Checkbox;
