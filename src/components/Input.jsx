import React, { useState } from "react";

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(value !== "" && !focused ? true : false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-0 top-1/2 -translate-y-1/2 pl-[--input-inline-padding] font-medium transition-transform duration-200 ${
          focused || value ? "-translate-y-5 text-sm" : "text-lg lg:text-xl"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="form-field px-[--input-inline-padding] pb-1 pt-6"
        {...props}
      />
    </div>
  );
}
