import { Link, NavLink, useNavigate } from "react-router";

import Logo from "./Logo";
import UserAvatar from "../features/authentication/components/UserAvatar";
import useUser from "../features/authentication/hooks/useUser";

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-[--header-height] w-full items-center justify-between gap-4 bg-secondary px-xs py-2 text-sm font-medium shadow-md sm:gap-10 sm:text-xl lg:text-2xl">
      <Link to="/" className="w-14 sm:w-20">
        <Logo />
      </Link>

      <NavList />

      <AuthButton />
    </header>
  );
}

function NavList() {
  return (
    <nav className="">
      <ul className="flex w-full justify-between gap-x-4 sm:gap-x-10">
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
            end
            to="/about"
            className={({ isActive }) => (isActive ? "text-accent" : "")}
          >
            Về chúng tôi
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function AuthButton() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  return (
    <button
      className="transition-transform duration-300 hover:scale-105"
      onClick={() => navigate(`${isAuthenticated ? "/account" : "/login"}`)}
      aria-label={isAuthenticated ? "Tới tài khoản người dùng" : "Đăng nhập"}
    >
      {isAuthenticated ? (
        <div className="size-11 sm:size-14">
          <UserAvatar />
        </div>
      ) : (
        <span className="rounded-md bg-purple-100 p-2 text-purple-700">
          Đăng nhập
        </span>
      )}
    </button>
  );
}
