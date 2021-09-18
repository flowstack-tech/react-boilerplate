import React from "react";

import { LinearProgress as LibLinearProgress, LinearProgressProps as LibLinearProgressProps } from "@material-ui/core";

export type LinearProgressProps = LibLinearProgressProps;

const LinearProgress: React.FC<LinearProgressProps> = ({ ...rest }) => {
  return <LibLinearProgress {...rest} />;
};

export default LinearProgress;
