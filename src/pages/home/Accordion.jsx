import CTAButton from "../../components/CTAButton";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Accordion({
  label,
  index,
  currentIndex,
  onClick,
  imageSrc,
  href,
  children,
}) {
  return (
    <li className="border-t border-primary">
      <button
        className={`flex w-full items-center justify-between py-6 text-3xl font-semibold ${currentIndex === index ? "text-accent" : ""}`}
        onClick={() => onClick(currentIndex === index ? null : index)}
      >
        {label}
        <span className="text-accent" aria-hidden="true">
          {currentIndex === index ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      <div
        className={`flex flex-col gap-6 ${currentIndex === index ? "block" : "hidden"}`}
      >
        <p className="max-w-[85ch] font-semibold text-primary md:text-lg">
          {children}
        </p>
        <CTAButton label="Khám phá ngay" href={href} className="w-fit" />
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className="bg-lightBlack aspect-[4/3] h-full w-full object-cover object-center lg:aspect-[2.4/1]"
        />
      </div>
    </li>
  );
}
