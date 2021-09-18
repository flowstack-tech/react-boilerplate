import React from "react";

import {
  DialogContentText as LibDialogContentText,
  DialogContentTextProps as LibDialogContentTextProps,
} from "@material-ui/core";

export type DialogContentTextProps = LibDialogContentTextProps;

const DialogContentText: React.FC<DialogContentTextProps> = ({ ...rest }) => {
  return <LibDialogContentText {...rest} />;
};

export default DialogContentText;
