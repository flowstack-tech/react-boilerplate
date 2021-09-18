import React from "react";

import { Backdrop as LibBackdrop, BackdropProps as LibBackdropProps } from "@material-ui/core";

export type BackdropProps = LibBackdropProps;

const Backdrop: React.FC<BackdropProps> = ({ ...rest }) => {
  return <LibBackdrop {...rest} />;
};

export default Backdrop;
