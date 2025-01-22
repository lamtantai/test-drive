import {
  IoCarSportOutline,
  IoCalendarClearOutline,
  IoKeyOutline,
} from "react-icons/io5";

import Step from "./Step";

export default function HowItWorks() {
  return (
    <section className="bg-gray-800">
      <ul className="px-xs text-secondary flex flex-col divide-y-[1px] py-10 lg:flex-row lg:justify-between lg:divide-none">
        <Step
          icon={<IoCarSportOutline />}
          text1="Chọn xe"
          text2="Chọn mẫu xe bạn muốn trải nghiệm."
        />

        <Step
          icon={<IoCalendarClearOutline />}
          text1="Đặt lịch hẹn"
          text2="Lựa chọn thời gian phù hợp với bạn."
        />

        <Step
          icon={<IoKeyOutline />}
          text1="Trải nghiệm"
          text2="Trải nghiệm lái thử thực tế."
        />
      </ul>
    </section>
  );
}
