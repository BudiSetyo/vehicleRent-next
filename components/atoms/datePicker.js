import React, { useState } from "react";
import DatePick from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ date, onChange, className }) => {
  return (
    <DatePick
      dateFormat="dd/MM/yyyy"
      selected={date || new Date()}
      onChange={onChange}
      className={`bg-transparant w-full ${className}`}
    />
  );
};

export default DatePicker;
