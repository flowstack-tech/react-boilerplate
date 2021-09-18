import React from "react";

import {
  SnackbarContent as LibSnackbarContent,
  SnackbarContentProps as LibSnackbarContentProps,
} from "@material-ui/core";

export type SnackbarContentProps = LibSnackbarContentProps;

const SnackbarContent: React.FC<SnackbarContentProps> = ({ ...rest }) => {
  return <LibSnackbarContent {...rest} />;
};

export default SnackbarContent;
