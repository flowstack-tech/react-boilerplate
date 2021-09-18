import React from "react";

import { Paper as LibPaper, PaperProps as LibPaperProps } from "@material-ui/core";

export type PaperProps = LibPaperProps;

const Paper: React.FC<PaperProps> = ({ ...rest }) => {
  return <LibPaper {...rest} />;
};

export default Paper;
