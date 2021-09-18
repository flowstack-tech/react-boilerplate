import React from "react";

import { Drawer as LibDrawer, DrawerProps as LibDrawerProps } from "@material-ui/core";

export type DrawerProps = LibDrawerProps;

const Drawer: React.FC<DrawerProps> = ({ ...rest }) => {
  return <LibDrawer {...rest} />;
};

export default Drawer;
