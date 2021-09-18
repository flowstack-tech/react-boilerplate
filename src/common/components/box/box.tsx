import React from "react";

import { Box as LibBox, BoxProps as LibBoxProps } from "@material-ui/core";

export type BoxProps = LibBoxProps;

const Box: React.FC<BoxProps> = ({ ...rest }) => {
  return <LibBox {...rest} />;
};

export default Box;
