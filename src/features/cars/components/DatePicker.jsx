import { useState, useMemo, useRef, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { vi } from "react-day-picker/locale";
import "react-day-picker/style.css";

import Input from "../../../components/Input";
import formattedDate from "../../../utils/formattedDate";

const MONTH_TO_ADD = 1;

export default function DatePicker({ onChange, selected }) {
  const [openCalendar, setOpenCalendar] = useState(false);

  const calendarRef = useRef(null);

  // Đóng lịch khi bấm ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setOpenCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  function handleChange(date) {
    setOpenCalendar(false);
    onChange(date);
  }

  return (
    <div className="relative" ref={calendarRef}>
      <Input
        label="Chọn một ngày (Tùy chọn)"
        type="text"
        readOnly
        name="date"
        value={selected ? formattedDate(selected) : ""}
        onClick={() => setOpenCalendar(!openCalendar)}
      />

      {openCalendar && (
        <div className="absolute z-10 mt-3 w-full bg-secondary p-2 shadow-card">
          <Calendar selected={selected} onSelectDate={handleChange} />
        </div>
      )}
    </div>
  );
}

function Calendar({ selected, onSelectDate }) {
  const defaultClassNames = getDefaultClassNames();

  // Cộng thêm 1 ngày vào ngày hiện tại
  const dateAfter = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }, []);

  // Tạo ngày kết thúc sau khi cộng thêm 1 tháng
  const endDate = useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + MONTH_TO_ADD);
    return date;
  }, []);

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
      defaultMonth={selected}
      endMonth={endDate}
      disabled={{ before: dateAfter }}
      selected={selected}
      onSelect={onSelectDate}
    />
  );
}
