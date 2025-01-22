import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-x-4 font-medium sm:gap-x-10">
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
      </ul>
    </nav>
  );
}
