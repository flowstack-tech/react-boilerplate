import React from "react";

import { Controller, UseControllerOptions } from "react-hook-form";
import { InputState } from "react-hook-form/dist/types";
import { ControllerRenderProps } from "react-hook-form/dist/types/props";

export type FormFieldProps = UseControllerOptions & {
  render: (field: ControllerRenderProps, state: InputState) => React.ReactElement;
};

const FormField: React.FC<FormFieldProps> = ({ name, defaultValue, control, render, ...rest }) => {
  return <Controller name={name} defaultValue={defaultValue} control={control} render={render} {...rest} />;
};

export default FormField;
