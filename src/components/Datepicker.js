import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App mb-3">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        isClearable
        scrollableMonthYearDropdown
        //scrollableYearDropdown
        showYearDropdown
        minDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      />
      <p class="text-primary">Enter your Date of Birth </p>
    </div>
  );
}
