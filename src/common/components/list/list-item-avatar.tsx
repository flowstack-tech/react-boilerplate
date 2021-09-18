import React from "react";

import { ListItemAvatar as LibListItemAvatar, ListItemAvatarProps as LibListItemAvatarProps } from "@material-ui/core";

export type ListItemAvatarProps = LibListItemAvatarProps;

const ListItemAvatar: React.FC<ListItemAvatarProps> = ({ children, ...rest }) => {
  return <LibListItemAvatar {...rest}>{children}</LibListItemAvatar>;
};

export default ListItemAvatar;
