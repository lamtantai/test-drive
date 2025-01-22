import LoginButton from "./LoginButton";
import Logo from "./Logo";
import PageNav from "./PageNav";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-secondary px-xs py-2 shadow-md sm:text-xl lg:text-2xl">
      <Logo />
      <PageNav />
      <LoginButton />
    </header>
  );
}
