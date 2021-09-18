import React from "react";

import { Radio as LibRadio, RadioProps as LibRadioProps } from "@material-ui/core";

export type RadioProps = LibRadioProps;

const Radio: React.FC<RadioProps> = ({ ...rest }) => {
  return <LibRadio {...rest} />;
};

export default Radio;
