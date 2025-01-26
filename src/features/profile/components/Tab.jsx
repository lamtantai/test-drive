import { NavLink } from "react-router";

export default function Tab({ href, label }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? "bg-zinc-200 p-2" : "p-2")}
    >
      {label}
    </NavLink>
  );
}
