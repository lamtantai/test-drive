import Tab from "./Tab";

export default function TabList() {
  return (
    <nav className="grid grid-cols-2 border-b text-center font-semibold lg:grid-cols-1 lg:border-none lg:text-start lg:text-xl">
      <Tab href="/account/profile" label="Thông tin tài khoản" />

      <Tab href="/account/bookings" label="Lịch sử đặt xe" />
    </nav>
  );
}
