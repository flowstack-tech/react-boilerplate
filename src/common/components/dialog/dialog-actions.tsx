import React from "react";

import { DialogActions as LibDialogActions, DialogActionsProps as LibDialogActionsProps } from "@material-ui/core";

export type DialogActionsProps = LibDialogActionsProps;

const DialogActions: React.FC<DialogActionsProps> = ({ ...rest }) => {
  return <LibDialogActions {...rest} />;
};

export default DialogActions;
