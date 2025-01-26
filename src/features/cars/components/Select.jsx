export default function Select({ id, icon, onChange, optionList }) {
  return (
    <div className="relative">
      <select
        name={id}
        id={id}
        className="form-field p-[--input-inline-padding]"
        onChange={onChange}
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
        }}
      >
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
