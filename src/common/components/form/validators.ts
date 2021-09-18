import { RegisterOptions } from "react-hook-form";

export const required = (message?: string): RegisterOptions => {
  return {
    required: message,
  };
};

export const numeric = (message?: string): RegisterOptions => {
  return {
    pattern: {
      value: /^\d+$/,
      message: message ?? "",
    },
  };
};
