import React from "react";

import { NativeSelect as LibNativeSelect, NativeSelectProps as LibNativeSelectProps } from "@material-ui/core";

export type NativeSelectProps = LibNativeSelectProps;

const NativeSelect: React.FC<NativeSelectProps> = ({ ...rest }) => {
  return <LibNativeSelect {...rest} />;
};

export default NativeSelect;
