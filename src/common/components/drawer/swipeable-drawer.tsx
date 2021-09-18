import React from "react";

import {
  SwipeableDrawer as LibSwipeableDrawer,
  SwipeableDrawerProps as LibSwipeableDrawerProps,
} from "@material-ui/core";

export type SwipeableDrawerProps = LibSwipeableDrawerProps;

const SwipeableDrawer: React.FC<SwipeableDrawerProps> = ({ ...rest }) => {
  return <LibSwipeableDrawer {...rest} />;
};

export default SwipeableDrawer;
