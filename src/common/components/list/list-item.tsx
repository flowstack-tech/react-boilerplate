import React from "react";

import { ListItem as LibListItem } from "@material-ui/core";

// ListItemProps is a generic type definition. It is easier to is React.ComponentProps here
export type ListItemProps = React.ComponentProps<typeof LibListItem>;

const ListItem: React.FC<ListItemProps> = ({ ...rest }) => {
  return <LibListItem {...rest} />;
};

export default ListItem;
