import { Link } from "react-router-dom";

export default function CTAButton({ label, href, outlined, className }) {
  return (
    <Link
      to={href}
      className={`inline-block rounded-sm border px-4 py-3 font-bold lg:text-xl ${className} ${outlined ? "border-secondary text-secondary transition-colors duration-300 hover:border-accent hover:bg-accent" : "border-accent bg-accent text-secondary transition-colors duration-300 hover:border-accent hover:bg-transparent hover:text-accent"}`}
    >
      {label}
    </Link>
  );
}
