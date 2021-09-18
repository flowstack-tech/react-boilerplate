import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  DateTimePicker as LibDateTimePicker,
  DateTimePickerProps as LibDateTimePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { DateTimeLocale } from "./types";

export type DateTimePickerProps = LibDateTimePickerProps & {
  locale?: DateTimeLocale;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ locale, ...rest }) => {
  return locale ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <LibDateTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <LibDateTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  );
};

export default DateTimePicker;
