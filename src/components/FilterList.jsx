import { useSearchParams } from "react-router";

export default function FilterList({ filterField, options, filteredValue }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-4 flex gap-2 border-b md:text-lg">
      {options.map((option) => (
        <button
          disabled={filteredValue === option.value}
          className={`border-b-4 px-3 py-2 hover:border-primary focus:border-primary ${filteredValue === option.value ? "cursor-not-allowed border-primary" : "border-transparent"}`}
          onClick={() => handleClick(option.value)}
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
