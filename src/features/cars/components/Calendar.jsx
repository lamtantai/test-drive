import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { vi } from "react-day-picker/locale";
import "react-day-picker/style.css";

export default function Calendar({ onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState();

  const defaultClassNames = getDefaultClassNames();

  const date = new Date();
  const monthsToAdd = 2;

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + monthsToAdd);

  const beforeMatcher = { before: date };

  function handleSelectedDate(date) {
    setSelectedDate(date);
    onSelectDate(date);
  }

  return (
    <DayPicker
      classNames={{
        months: `${defaultClassNames.months} !max-w-full`,
        month: `${defaultClassNames.month} w-full`,
        month_grid: `${defaultClassNames.month_grid} w-full`,
        day_button: `${defaultClassNames.day_button} !inline-block hover:border-2 hover:border-[blue]`,
      }}
      showOutsideDays
      mode="single"
      locale={vi}
      defaultMonth={selectedDate}
      endMonth={endDate}
      disabled={beforeMatcher}
      selected={selectedDate}
      onSelect={handleSelectedDate}
    />
  );
}
