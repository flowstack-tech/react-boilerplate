import React from "react";

import { CardContent as LibCardContent, CardContentProps as LibCardContentProps } from "@material-ui/core";

export type CardContentProps = LibCardContentProps;

const CardContent: React.FC<CardContentProps> = ({ ...rest }) => {
  return <LibCardContent {...rest} />;
};

export default CardContent;
