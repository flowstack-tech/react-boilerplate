import React from "react";

import { GridList as LibGridList, GridListProps as LibGridListProps } from "@material-ui/core";

export type GridListProps = LibGridListProps;

const GridList: React.FC<GridListProps> = ({ ...rest }) => {
  return <LibGridList {...rest} />;
};

export default GridList;
