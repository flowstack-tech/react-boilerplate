import React from "react";

import { ListItemText as LibListItemText, ListItemTextProps as LibListItemTextProps } from "@material-ui/core";

export type ListItemTextProps = LibListItemTextProps;

const ListItemText: React.FC<ListItemTextProps> = ({ ...rest }) => {
  return <LibListItemText {...rest} />;
};

export default ListItemText;
