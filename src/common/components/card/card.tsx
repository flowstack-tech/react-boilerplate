import React from "react";

import { Card as LibCard, CardProps as LibCardProps } from "@material-ui/core";

export type CardProps = LibCardProps;

const Card: React.FC<CardProps> = ({ ...rest }) => {
  return <LibCard {...rest} />;
};

export default Card;
