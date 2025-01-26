import { FiMinus, FiPlus } from "react-icons/fi";

export default function AccordionItem({
  label,
  index,
  currentIndex,
  onClick,
  className,
  children,
}) {
  return (
    <li className="border-t-2 border-t-black pb-2">
      <button
        className={`flex w-full items-center justify-between py-2 font-semibold ${currentIndex === index ? "text-accent" : ""}`}
        onClick={() => onClick(currentIndex === index ? null : index)}
      >
        {label}
        <span className="text-accent" aria-hidden="true">
          {currentIndex === index ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      {currentIndex === index && children}
    </li>
  );
}
