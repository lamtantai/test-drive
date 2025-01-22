import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { vi } from "react-day-picker/locale";
import "react-day-picker/style.css";

export function DatePicker() {
  const [selected, setSelected] = useState();

  const defaultClassNames = getDefaultClassNames();

  const date = new Date();
  const monthsToAdd = 2;

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + monthsToAdd);

  const beforeMatcher = { before: date };
  return (
    <DayPicker
      classNames={{
        selected: `bg-primary text-secondary rounded-full`,
        root: `${defaultClassNames.root} shadow-lg p-5`,
        chevron: `${defaultClassNames.chevron} fill-amber-500`,
        disabled: `line-through opacity-50`,
        months: `${defaultClassNames.months} !max-w-full`,
        month: `${defaultClassNames.month} w-full`,
        month_grid: `${defaultClassNames.month_grid} w-full`,
        day_button: `${defaultClassNames.day_button} !inline-block`,
      }}
      showOutsideDays
      mode="single"
      locale={vi}
      startMonth={date}
      endMonth={endDate}
      disabled={beforeMatcher}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
