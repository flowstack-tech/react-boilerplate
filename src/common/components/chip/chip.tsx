import React from "react";

import { Chip as LibChip, ChipProps as LibChipProps } from "@material-ui/core";

export type ChipProps = LibChipProps;

const Chip: React.FC<ChipProps> = ({ ...rest }) => {
  return <LibChip {...rest} />;
};

export default Chip;
