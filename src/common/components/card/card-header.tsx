import React from "react";

import { CardHeader as LibCardHeader, CardHeaderProps as LibCardHeaderProps } from "@material-ui/core";

export type CardHeaderProps = LibCardHeaderProps;

const CardHeader: React.FC<CardHeaderProps> = ({ ...rest }) => {
  return <LibCardHeader {...rest} />;
};

export default CardHeader;
