import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="/login" className="rounded-full border border-primary p-1">
      <IoPersonOutline />
    </Link>
  );
}
