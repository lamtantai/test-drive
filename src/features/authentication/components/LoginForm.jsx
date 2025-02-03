import { IoArrowForwardSharp } from "react-icons/io5";

import { useState } from "react";
import Input from "../../../components/Input";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const [account, setAccount] = useState({
    email: "user@user.com",
    password: "user",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setAccount((account) => ({ ...account, [name]: value }));
  }

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = account;

    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 max-w-96 bg-secondary p-xs shadow-lg"
    >
      <h1 className="mb-4 mt-16 text-3xl font-semibold">Đăng nhập</h1>

      <Input
        label="Email"
        name="email"
        type="text"
        disabled={isPending}
        value={account.email}
        onChange={handleInputChange}
      />

      <Input
        label="Mật khẩu"
        name="password"
        type="password"
        disabled={isPending}
        value={account.password}
        onChange={handleInputChange}
      />

      <div className="mt-20 flex justify-center">
        <button className="flex size-20 items-center justify-center border border-black">
          <span className="text-5xl">
            {isPending ? "pendin" : <IoArrowForwardSharp />}
          </span>
        </button>
      </div>
    </form>
  );
}
