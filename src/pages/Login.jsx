import {
  IoLockClosedOutline,
  IoPersonOutline,
  IoArrowForwardSharp,
} from "react-icons/io5";

import InputField from "../components/InputField";

export default function Login() {
  return (
    <div className="flex h-[calc(100vh-var(--header-height))] w-full flex-col items-center justify-center gap-10 bg-slate-50">
      <form className="w-3/4 max-w-96 bg-secondary p-xs shadow-lg">
        <h1 className="mb-4 mt-16 text-3xl font-semibold">Đăng nhập</h1>

        <div className="my-3">
          <label htmlFor="user">Tên người dùng</label>
          <InputField id="user" type="text" icon={<IoPersonOutline />} />
        </div>

        <div className="">
          <label htmlFor="password">Mật khẩu</label>
          <InputField
            id="password"
            type="password"
            icon={<IoLockClosedOutline />}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <button className="flex size-20 items-center justify-center border border-black">
            <span className="text-5xl">
              <IoArrowForwardSharp />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
