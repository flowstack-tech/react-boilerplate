import React from "react";

import { DialogContent as LibDialogContent, DialogContentProps as LibDialogContentProps } from "@material-ui/core";

export type DialogContentProps = LibDialogContentProps;

const DialogContent: React.FC<DialogContentProps> = ({ ...rest }) => {
  return <LibDialogContent {...rest} />;
};

export default DialogContent;
