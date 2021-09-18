import React from "react";

import { DialogTitle as LibDialogTitle, DialogTitleProps as LibDialogTitleProps } from "@material-ui/core";

export type DialogTitleProps = LibDialogTitleProps;

const DialogTitle: React.FC<DialogTitleProps> = ({ ...rest }) => {
  return <LibDialogTitle {...rest} />;
};

export default DialogTitle;
