import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import LoginForm from "../features/authentication/components/LoginForm";

export default function Login() {
  const { user } = useUser();
  const navigate = useNavigate();

  // if (user) {
  //   navigate("/");
  // }

  return (
    <div className="flex h-[calc(100vh-var(--header-height))] w-full flex-col items-center justify-center gap-10 bg-slate-50">
      <LoginForm />
    </div>
  );
}
