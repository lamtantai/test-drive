import { Outlet } from "react-router";
import TabList from "../features/profile/components/TabList";
import LogoutButton from "../features/profile/components/LogoutButton";

export default function Account() {
  return (
    <div className="flex min-h-[calc(100vh-(var(--header-height)))] flex-col gap-10 px-xs pt-10 lg:flex-row">
      <section className="flex flex-col gap-10 lg:flex-1 lg:border-r-2">
        <div className="flex flex-col gap-4 lg:order-last">
          <div className="flex items-center gap-4">
            <img
              src="/ALL-CAR.png"
              width={100}
              height={100}
              alt="User image"
              className="aspect-square rounded-full object-cover"
            />
            <h1 className="text-2xl font-semibold">Xin chào, userName</h1>
          </div>

          <LogoutButton />
        </div>

        <TabList />
      </section>

      <section className="lg:flex-[3]">
        <Outlet />
      </section>
    </div>
  );
}
