import { Link, NavLink } from "react-router";

import Logo from "./Logo";
import { IoPersonCircleSharp } from "react-icons/io5";

import { useUser } from "../context/UserContext";

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    <header className="sticky left-0 top-0 z-50 flex h-[--header-height] w-full items-center justify-between bg-secondary px-xs py-2 shadow-md">
      <Link to="/">
        <Logo />
      </Link>

      <NavList>
        <NavItem href="/cars" label="Mẫu xe" />
        <NavItem href="/about" label="Về chúng tôi" />
        <NavItem
          href={user ? "/account" : "/login"}
          label={user ? <IoPersonCircleSharp /> : "Login"}
        />
      </NavList>
    </header>
  );
}

function NavList({ children }) {
  return (
    <nav className="flex items-center">
      <ul className="flex w-full items-center justify-between gap-x-4 font-medium sm:gap-x-10 sm:text-xl lg:text-2xl">
        {children}
      </ul>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <li className="transition-colors duration-300 hover:text-accent">
      <NavLink
        end
        to={href}
        className={({ isActive }) => (isActive ? "text-accent" : "")}
      >
        {label}
      </NavLink>
    </li>
  );
}
