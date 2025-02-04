import LogoutButton from "./LogoutButton";
import UserAvatar from "./UserAvatar";

export default function UserInfo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="size-32">
        <UserAvatar />
      </div>

      <h1 className="text-xl">Xin chào, Tan Tai</h1>

      <LogoutButton />
    </div>
  );
}
