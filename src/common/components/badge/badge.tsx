import React from "react";

import { Badge as LibBadge, BadgeProps as LibBadgeProps } from "@material-ui/core";

export type BadgeProps = LibBadgeProps;

const Badge: React.FC<BadgeProps> = ({ ...rest }) => {
  return <LibBadge {...rest} />;
};

export default Badge;
