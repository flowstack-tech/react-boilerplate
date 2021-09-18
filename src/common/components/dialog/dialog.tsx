import React from "react";

import { Dialog as LibDialog, DialogProps as LibDialogProps } from "@material-ui/core";

export type DialogProps = LibDialogProps;

const Dialog: React.FC<DialogProps> = ({ ...rest }) => {
  return <LibDialog {...rest} />;
};

export default Dialog;
