export default function Select({
  placeholder,
  name,
  icon,
  onChange,
  optionList,
}) {
  return (
    <div className="relative">
      <select
        name={name}
        id={name}
        className="form-field p-[--input-inline-padding]"
        onChange={onChange}
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
        }}
      >
        <option value="">{placeholder}</option>

        {optionList?.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <span className="absolute right-[--input-inline-padding] top-1/2 -translate-y-1/2 cursor-pointer text-2xl">
        {icon}
      </span>
    </div>
  );
}
