import React from "react";

import { ListItemIcon as LibListItemIcon, ListItemIconProps as LibListItemIconProps } from "@material-ui/core";

export type ListItemIconProps = LibListItemIconProps;

const ListItemIcon: React.FC<ListItemIconProps> = ({ ...rest }) => {
  return <LibListItemIcon {...rest} />;
};

export default ListItemIcon;
