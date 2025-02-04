import SpinnerMini from "../../../components/SpinnerMini";
import useLogout from "../hooks/useLogout";

export default function LogoutButton() {
  const { logout, isSuccess, isLoading } = useLogout();

  return (
    <button
      disabled={isLoading || isSuccess}
      onClick={logout}
      className={`w-full rounded-md bg-error-100 p-3 text-error-700 ${(isLoading || isSuccess) && "cursor-not-allowed"}`}
    >
      {isLoading || isSuccess ? <SpinnerMini /> : "Đăng xuất"}
    </button>
  );
}
