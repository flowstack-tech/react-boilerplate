import React from "react";

import { AppBar as LibAppBar, AppBarProps as LibAppBarProps } from "@material-ui/core";

export type AppBarProps = LibAppBarProps;

// Use toolbar inside appbar to have flex-direction: row
const AppBar: React.FC<AppBarProps> = ({ ...rest }) => {
  return <LibAppBar {...rest} />;
};

export default AppBar;
