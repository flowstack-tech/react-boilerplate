import React from "react";

import { Toolbar as LibToolbar, ToolbarProps as LibToolbarProps } from "@material-ui/core";

export type ToolbarProps = LibToolbarProps;

const Toolbar: React.FC<ToolbarProps> = ({ ...rest }) => {
  return <LibToolbar {...rest} />;
};

export default Toolbar;
