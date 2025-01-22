import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-x-4 font-medium sm:gap-x-10">
        <li className="hover:text-accent transition-colors duration-300">
          <NavLink
            to="/cars"
            className={({ isActive }) => (isActive ? "text-accent" : "")}
          >
            Mẫu xe
          </NavLink>
        </li>

        <li className="hover:text-accent transition-colors duration-300">
          <NavLink
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
