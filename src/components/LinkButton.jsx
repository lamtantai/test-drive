import { Link } from "react-router-dom";

export default function LinkButton({ label, href, outlined, className }) {
  return (
    <Link
      to={href}
      className={`inline-block rounded-sm border px-4 py-3 font-bold lg:text-xl ${className} ${outlined ? "hover:border-accent hover:bg-accent border-secondary text-secondary transition-colors duration-300" : "border-accent bg-accent hover:border-accent hover:text-accent text-secondary transition-colors duration-300 hover:bg-transparent"}`}
    >
      {label}
    </Link>
  );
}
