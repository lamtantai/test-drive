import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="w-20 lg:w-32">
      <img
        src="/logo.png"
        alt="Logo"
        width={80}
        height={60}
        className="max-w-full"
      />
    </Link>
  );
}
