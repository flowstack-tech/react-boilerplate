import React from "react";

import { Select as LibSelect, SelectProps as LibSelectProps } from "@material-ui/core";

export type SelectProps = LibSelectProps;

const Select: React.FC<SelectProps> = ({ ...rest }) => {
  return <LibSelect {...rest} />;
};

export default Select;
