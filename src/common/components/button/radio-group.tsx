import React from "react";

import { RadioGroup as LibRadioGroup, RadioGroupProps as LibRadioGroupProps } from "@material-ui/core";

export type RadioGroupProps = LibRadioGroupProps;

const RadioGroup: React.FC<RadioGroupProps> = ({ ...rest }) => {
  return <LibRadioGroup {...rest} />;
};

export default RadioGroup;
