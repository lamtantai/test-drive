import { NavLink } from "react-router";

export default function TabList() {
  return (
    <nav className="grid grid-cols-2 border-b text-center font-semibold lg:grid-cols-1 lg:border-none lg:text-start lg:text-xl">
      <Tab href="/account/profile" label="Thông tin tài khoản" />

      <Tab href="/account/bookings" label="Lịch sử đặt xe" />
    </nav>
  );
}

export function Tab({ href, label }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? "bg-zinc-200 p-2" : "p-2")}
    >
      {label}
    </NavLink>
  );
}
