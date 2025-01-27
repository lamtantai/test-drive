import { Link, NavLink } from "react-router";

import Logo from "./Logo";
import { IoPersonCircleSharp } from "react-icons/io5";

import { useUser } from "../context/UserContext";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="sticky left-0 top-0 z-50 flex h-[--header-height] w-full items-center justify-between bg-secondary px-xs py-2 shadow-md">
      <Link to="/">
        <Logo />
      </Link>

      <nav className="flex items-center">
        <ul className="flex w-full items-center justify-between gap-x-4 font-medium sm:gap-x-10 sm:text-xl lg:text-2xl">
          <li className="transition-colors duration-300 hover:text-accent">
            <NavLink
              end
              to="/cars"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              Mẫu xe
            </NavLink>
          </li>

          <li className="transition-colors duration-300 hover:text-accent">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              Về chúng tôi
            </NavLink>
          </li>

          <li className="transition-colors duration-300 hover:text-accent">
            <Link to={user ? "account" : "/login"}>
              <span className="text-4xl">
                {user ? user.email : <IoPersonCircleSharp />}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
