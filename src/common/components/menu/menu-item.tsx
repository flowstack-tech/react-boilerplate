import React from "react";

import { MenuItem as LibMenuItem } from "@material-ui/core";

// MenuItemProps is a generic type definition. It is easier to is React.ComponentProps here
export type MenuItemProps = React.ComponentProps<typeof LibMenuItem>;

// Need to wrap this into a class component. But, is it even necessary? Will do it if any customisation is required.
// Refer https://material-ui.com/guides/composition/#caveat-with-refs and https://material-ui.com/guides/composition/#caveat-with-strictmode
const MenuItem = LibMenuItem;

export default MenuItem;
