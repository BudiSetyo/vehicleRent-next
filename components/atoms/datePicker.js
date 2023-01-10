import React, { useState } from "react";
import DatePick from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (onChange) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePick
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={onChange}
      className="bg-transparant w-full"
    />
  );
};

export default DatePicker;
