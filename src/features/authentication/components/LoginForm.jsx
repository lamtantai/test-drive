import { useState } from "react";
import Input from "../../../components/Input";
import useLogin from "../hooks/useLogin";
import SpinnerMini from "../../../components/SpinnerMini";

export default function LoginForm() {
  const [account, setAccount] = useState({
    email: "user@user.com",
    password: "user",
  });

  const { login, isLoading, isSuccess } = useLogin();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setAccount((account) => ({ ...account, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = account;

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setAccount({ email: "", password: "" });
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-3/4 max-w-96 flex-col gap-4 bg-secondary p-xs shadow-lg"
    >
      <h1 className="text-center text-3xl font-semibold">Đăng nhập</h1>

      <Input
        label="Email"
        name="email"
        type="text"
        disabled={isLoading || isSuccess}
        value={account.email}
        onChange={handleInputChange}
      />

      <Input
        label="Mật khẩu"
        name="password"
        type="password"
        disabled={isLoading || isSuccess}
        value={account.password}
        onChange={handleInputChange}
      />

      <div className="flex justify-center">
        <button
          disabled={isLoading || isSuccess}
          className={`w-full rounded-md bg-complete-100 p-3 text-complete-700 ${(isLoading || isSuccess) && "cursor-not-allowed"}`}
        >
          {isLoading || isSuccess ? <SpinnerMini /> : "Đăng nhập"}
        </button>
      </div>
    </form>
  );
}
