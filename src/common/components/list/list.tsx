import React from "react";

import { List as LibList, ListProps as LibListProps } from "@material-ui/core";

export type ListProps = LibListProps;

const List: React.FC<ListProps> = ({ ...rest }) => {
  return <LibList {...rest} />;
};

export default List;
