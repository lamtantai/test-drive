import { Outlet } from "react-router";
import TabList from "../features/profile/components/TabList";
import UserInfo from "../features/authentication/components/UserInfo";

export default function Account() {
  return (
    <div className="h-[calc(100vh-(var(--header-height)))] lg:grid lg:grid-cols-[18rem_1fr]">
      <section className="flex flex-col gap-10 px-4 pt-10 font-medium lg:border-r-2">
        <UserInfo />

        <TabList />
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-4 pt-10">
        <Outlet />
      </section>
    </div>
  );
}
