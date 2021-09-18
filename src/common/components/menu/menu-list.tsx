import React from "react";

import { MenuList as LibMenuList, MenuListProps as LibMenuListProps } from "@material-ui/core";

export type MenuListProps = LibMenuListProps;

const MenuList: React.FC<MenuListProps> = ({ ...rest }) => {
  return <LibMenuList {...rest} />;
};

export default MenuList;
