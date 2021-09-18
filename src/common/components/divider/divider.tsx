import React from "react";

import { Divider as LibDivider, DividerProps as LibDividerProps } from "@material-ui/core";

export type DividerProps = LibDividerProps;

const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  return <LibDivider {...rest} />;
};

export default Divider;
