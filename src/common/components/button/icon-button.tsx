import React from "react";

import { IconButton as LibIconButton, IconButtonProps as LibIconButtonProps } from "@material-ui/core";

export type IconButtonProps = LibIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({ ...rest }) => {
  return <LibIconButton {...rest} />;
};

export default IconButton;
