import React from "react";

import {
  CircularProgress as LibCircularProgress,
  CircularProgressProps as LibCircularProgressProps,
} from "@material-ui/core";

export type CircularProgressProps = LibCircularProgressProps;

const CircularProgress: React.FC<CircularProgressProps> = ({ ...rest }) => {
  return <LibCircularProgress {...rest} />;
};

export default CircularProgress;
