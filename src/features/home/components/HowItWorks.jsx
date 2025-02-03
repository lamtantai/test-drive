import {
  IoCarSportOutline,
  IoCalendarClearOutline,
  IoKeyOutline,
} from "react-icons/io5";

export default function HowItWorks() {
  return (
    <section className="bg-gray-800">
      <ol className="flex flex-col px-xs py-10 text-secondary lg:flex-row lg:justify-between">
        <Step
          icon={<IoCarSportOutline />}
          text1="Chọn xe"
          text2="Chọn mẫu xe bạn muốn trải nghiệm."
        />
        <hr />
        <Step
          icon={<IoCalendarClearOutline />}
          text1="Đặt lịch hẹn"
          text2="Lựa chọn thời gian phù hợp với bạn."
        />
        <hr />
        <Step
          icon={<IoKeyOutline />}
          text1="Trải nghiệm"
          text2="Trải nghiệm lái thử thực tế."
        />
      </ol>
    </section>
  );
}

function Step({ icon, text1, text2 }) {
  return (
    <li className="grid grid-cols-[46px,1fr] gap-x-4 py-6">
      <span className="flex w-fit items-center justify-center rounded-full border border-secondary p-2 text-xl lg:text-2xl">
        {icon}
      </span>

      <h2 className="self-center text-2xl lg:text-3xl">{text1}</h2>

      <p className="col-span-full col-start-2 text-sm text-lightGray lg:text-lg">
        {text2}
      </p>
    </li>
  );
}
