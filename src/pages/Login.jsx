import LoginForm from "../features/authentication/components/LoginForm";

export default function Login() {
  return (
    <div className="flex h-[calc(100vh-var(--header-height))] w-full flex-col items-center justify-center gap-10 bg-slate-50">
      <LoginForm />
    </div>
  );
}
