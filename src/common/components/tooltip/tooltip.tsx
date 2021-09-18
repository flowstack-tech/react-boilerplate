import React from "react";

import { Tooltip as LibTooltip, TooltipProps as LibTooltipProps } from "@material-ui/core";

export type TooltipProps = LibTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({ children, ...rest }) => {
  return <LibTooltip {...rest}>{children}</LibTooltip>;
};

export default Tooltip;
