import React from "react";

import { ListSubheader as LibListSubheader, ListSubheaderProps as LibListSubheaderProps } from "@material-ui/core";

export type ListSubheaderProps = LibListSubheaderProps;

const ListSubheader: React.FC<ListSubheaderProps> = ({ ...rest }) => {
  return <LibListSubheader {...rest} />;
};

export default ListSubheader;
