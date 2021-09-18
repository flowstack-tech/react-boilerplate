import React from "react";

import { CardActions as LibCardActions, CardActionsProps as LibCardActionsProps } from "@material-ui/core";

export type CardActionsProps = LibCardActionsProps;

const CardActions: React.FC<CardActionsProps> = ({ ...rest }) => {
  return <LibCardActions {...rest} />;
};

export default CardActions;
