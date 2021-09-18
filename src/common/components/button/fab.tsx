import React from "react";

import { Fab as LibFab, FabProps as LibFabProps } from "@material-ui/core";

export type FabProps = LibFabProps;

const Fab: React.FC<FabProps> = ({ children, ...rest }) => {
  return <LibFab {...rest}>{children}</LibFab>;
};

export default Fab;
