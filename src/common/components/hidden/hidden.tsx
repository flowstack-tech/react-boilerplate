import React from "react";

import { Hidden as LibHidden, HiddenProps as LibHiddenProps } from "@material-ui/core";

export type HiddenProps = LibHiddenProps;

const Hidden: React.FC<HiddenProps> = ({ ...rest }) => {
  return <LibHidden {...rest} />;
};

export default Hidden;
