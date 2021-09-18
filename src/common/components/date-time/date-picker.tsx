import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker as LibDatePicker,
  DatePickerProps as LibDatePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { DateTimeLocale } from "./types";

export type DatePickerProps = LibDatePickerProps & {
  locale?: DateTimeLocale;
};

const DatePicker: React.FC<DatePickerProps> = ({ locale, ...rest }) => {
  return locale ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <LibDatePicker {...rest} />
    </MuiPickersUtilsProvider>
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <LibDatePicker {...rest} />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
