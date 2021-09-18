import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker as LibTimePicker,
  TimePickerProps as LibTimePickerProps,
} from "@material-ui/pickers";

import { DateTimeLocale } from "./types";

export type TimePickerProps = LibTimePickerProps & {
  locale?: DateTimeLocale;
};

const TimePicker: React.FC<TimePickerProps> = ({ locale, ...rest }) => {
  return locale ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <LibTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <LibTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  );
};

export default TimePicker;
