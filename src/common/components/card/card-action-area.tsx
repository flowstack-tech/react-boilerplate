import React from "react";

import { CardActionArea as LibCardActionArea, CardActionAreaProps as LibCardActionAreaProps } from "@material-ui/core";

export type CardActionAreaProps = LibCardActionAreaProps;

const CardActionArea: React.FC<CardActionAreaProps> = ({ ...rest }) => {
  return <LibCardActionArea {...rest} />;
};

export default CardActionArea;
