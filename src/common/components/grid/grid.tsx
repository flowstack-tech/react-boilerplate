import React from "react";

import { Grid as LibGrid, GridProps as LibGridProps } from "@material-ui/core";

export type GridProps = LibGridProps;

const Grid: React.FC<GridProps> = ({ ...rest }) => {
  return <LibGrid {...rest} />;
};

export default Grid;
