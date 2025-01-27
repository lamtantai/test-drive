import { useState } from "react";

import Input from "../../../components/Input";
import Calendar from "./Calendar";

export default function DatePicker({ onChange }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);

  function formattedDate(date) {
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  function handleChange(date) {
    setSelectedDate(date);
    setOpenCalendar(false);
    onChange(formattedDate(date));
  }

  return (
    <div className="relative">
      <Input
        label="Chọn một ngày (Tùy chọn)"
        type="text"
        readOnly
        // onChange={handleChange}
        name="date"
        value={selectedDate ? formattedDate(selectedDate) : ""}
        onClick={() => setOpenCalendar(!openCalendar)}
      />

      {openCalendar && (
        <div className="absolute z-10 mt-3 w-full bg-secondary p-2 shadow-card">
          <Calendar onSelectDate={handleChange} />
        </div>
      )}
    </div>
  );
}
