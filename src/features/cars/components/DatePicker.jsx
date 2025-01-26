import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { vi } from "react-day-picker/locale";
import "react-day-picker/style.css";

import Input from "../../../components/Input";

export function DatePicker() {
  const [selected, setSelected] = useState();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const defaultClassNames = getDefaultClassNames();

  const date = new Date();
  const monthsToAdd = 2;

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + monthsToAdd);

  const beforeMatcher = { before: date };

  function handleSelectDate(date) {
    setSelected(date);
    setIsCalendarOpen(false);
  }

  return (
    <div className="relative">
      <Input
        label="Chọn một ngày (Tùy chọn)"
        type="text"
        readOnly
        name="pickedDate"
        value={
          selected
            ? selected.toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : ""
        }
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      />

      {isCalendarOpen && (
        <div className="absolute z-10 mt-4 w-full bg-secondary p-2 shadow-lg">
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
            defaultMonth={selected}
            endMonth={endDate}
            disabled={beforeMatcher}
            selected={selected}
            onSelect={handleSelectDate}
          />
        </div>
      )}
    </div>
  );
}
