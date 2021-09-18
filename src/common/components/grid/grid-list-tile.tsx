import React from "react";

import { GridListTile as LibGridListTile, GridListTileProps as LibGridListTileProps } from "@material-ui/core";

export type GridListTileProps = LibGridListTileProps;

const GridListTile: React.FC<GridListTileProps> = ({ ...rest }) => {
  return <LibGridListTile {...rest} />;
};

export default GridListTile;
