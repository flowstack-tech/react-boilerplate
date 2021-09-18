import React from "react";

import { Menu as LibMenu, MenuProps as LibMenuProps } from "@material-ui/core";

export type MenuProps = LibMenuProps;

const Menu: React.FC<MenuProps> = ({ ...rest }) => {
  return <LibMenu {...rest} />;
};

export default Menu;
