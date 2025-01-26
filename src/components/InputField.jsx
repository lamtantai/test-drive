export default function InputField({ id, icon, ...props }) {
  return (
    <div className="relative">
      <input
        required
        name={id}
        id={id}
        className="w-full border border-black p-2 focus:outline-accent md:p-3"
        {...props}
      />

      <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl">
        {icon}
      </span>
    </div>
  );
}
