import { useState } from "react";
import Accordion from "./Accordion";

export default function FuelTypeSection() {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <section className="px-xs py-16">
      <div className="font-semibold">
        <h2 className="text-3xl capitalize md:text-5xl">Các loại xe</h2>
        <p className="mt-4 max-w-[72ch] md:text-lg">
          Hãy khám phá các lựa chọn xe phù hợp với phong cách của bạn. Xe điện,
          xe xăng hay hybrid - mỗi loại đều mang đến những trải nghiệm khác
          biệt. Điều quan trọng không phải chỉ là loại xe bạn chọn, mà là những
          trải nghiệm bạn sẽ có với nó.
        </p>
      </div>

      <ul className="mt-10">
        <Accordion
          label="Xe Hybird"
          index={0}
          currentIndex={currentIndex}
          onClick={setCurrentIndex}
          imageSrc="/HYBIRD-CAR.png"
        >
          Xe hybrid kết hợp động cơ xăng và điện, mang lại sự tiết kiệm nhiên
          liệu vượt trội và giảm thiểu khí thải. Đây là lựa chọn lý tưởng cho
          những ai muốn có sự cân bằng giữa hiệu suất mạnh mẽ và khả năng tiết
          kiệm nhiên liệu trong khi vẫn bảo vệ môi trường.
        </Accordion>
        <Accordion
          label="Xe Xăng"
          index={1}
          currentIndex={currentIndex}
          onClick={setCurrentIndex}
          imageSrc="/DIESEL-CAR.png"
        >
          Xe xăng mang lại hiệu suất vận hành mạnh mẽ, giúp bạn dễ dàng di
          chuyển trong mọi điều kiện. Với sự tiện lợi của các trạm xăng có mặt
          rộng rãi, xe xăng là sự lựa chọn lý tưởng cho những ai yêu thích sự
          linh hoạt và dễ dàng trong việc di chuyển dài ngày mà không cần lo
          lắng về việc sạc điện.
        </Accordion>
        <Accordion
          label="Xe Điện"
          index={2}
          currentIndex={currentIndex}
          onClick={setCurrentIndex}
          imageSrc="/ELECTRIC-CAR.png"
        >
          Xe điện mang lại trải nghiệm lái êm ái và tiết kiệm chi phí bảo dưỡng.
          Với việc không sử dụng nhiên liệu hóa thạch, xe điện là lựa chọn thân
          thiện với môi trường, giúp giảm thiểu khí thải. Chỉ cần sạc và bạn đã
          sẵn sàng cho hành trình dài mà không lo về nhiên liệu.
        </Accordion>
      </ul>
    </section>
  );
}
