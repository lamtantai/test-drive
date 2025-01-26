import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <div className="">
      <Link
        to="/login"
        className="h-fit rounded-full border border-primary p-1"
      >
        <IoPersonOutline />
      </Link>
    </div>
  );
}
