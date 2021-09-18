import React from "react";

import { Snackbar as LibSnackbar, SnackbarProps as LibSnackbarProps } from "@material-ui/core";

export type SnackbarProps = LibSnackbarProps;

const Snackbar: React.FC<SnackbarProps> = ({ ...rest }) => {
  return <LibSnackbar {...rest} />;
};

export default Snackbar;
