import React from "react";

import { CardMedia as LibCardMedia, CardMediaProps as LibCardMediaProps } from "@material-ui/core";

export type CardMediaProps = LibCardMediaProps;

const CardMedia: React.FC<CardMediaProps> = ({ ...rest }) => {
  return <LibCardMedia {...rest} />;
};

export default CardMedia;
