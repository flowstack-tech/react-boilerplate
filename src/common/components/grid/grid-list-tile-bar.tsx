import React from "react";

import {
  GridListTileBar as LibGridListTileBar,
  GridListTileBarProps as LibGridListTileBarProps,
} from "@material-ui/core";

export type GridListTileBarProps = LibGridListTileBarProps;

const GridListTileBar: React.FC<GridListTileBarProps> = ({ ...rest }) => {
  return <LibGridListTileBar {...rest} />;
};

export default GridListTileBar;
