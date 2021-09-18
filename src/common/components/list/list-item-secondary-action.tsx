import React from "react";

import {
  ListItemSecondaryAction as LibListItemSecondaryAction,
  ListItemSecondaryActionProps as LibListItemSecondaryActionProps,
} from "@material-ui/core";

export type ListItemSecondaryActionProps = LibListItemSecondaryActionProps;

const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = ({ ...rest }) => {
  return <LibListItemSecondaryAction {...rest} />;
};

export default ListItemSecondaryAction;
