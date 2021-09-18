import React from "react";

import { Switch as LibSwitch, SwitchProps as LibSwitchProps } from "@material-ui/core";

export type SwitchProps = LibSwitchProps;

const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  return <LibSwitch {...rest} />;
};

export default Switch;
