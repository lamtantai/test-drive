import LoginForm from "../features/authentication/components/LoginForm";
import useUser from "../features/authentication/hooks/useUser";

export default function Login() {
  const { user, isAuthenticated, isLoading } = useUser();

  if (isLoading) return;

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      {isAuthenticated && !isLoading ? (
        <h1 className="text-center text-lg">
          Bạn đang đăng nhập dưới tên{" "}
          <span className="font-bold">{user.email}</span>
        </h1>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  );
}
