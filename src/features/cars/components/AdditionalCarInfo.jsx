import { useState } from "react";

import AccordionItem from "../../../components/AccordionItem";

export default function AdditionalCarInfo({ car }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <ul className="text-xl">
      <AccordionItem
        label="Thông số nổi bật"
        index={0}
        currentIndex={currentIndex}
        onClick={setCurrentIndex}
      >
        <ul className="list-inside list-disc text-base">
          {car.features.map((feature, i) => {
            const [text1, text2] = feature.split(":");
            return (
              <li key={i}>
                <strong>
                  {text1}
                  {text2 ? ":" : ""}
                </strong>
                {text2 && text2}.
              </li>
            );
          })}
        </ul>
      </AccordionItem>

      <AccordionItem
        label="Chính sách đăng ký"
        index={1}
        currentIndex={currentIndex}
        onClick={setCurrentIndex}
      >
        <ul className="list-inside list-disc text-base">
          <li>
            <strong>Đối tượng:</strong> Khách hàng từ 18 tuổi trở lên, có giấy
            phép lái xe hợp lệ.
          </li>
          <li>
            <strong>Thời gian mượn:</strong> Từ 30 phút đến 1 giờ, có thể dài
            hơn tùy mẫu xe.
          </li>
          <li>
            <strong>Chi phí:</strong> Miễn phí hoặc có phí tùy xe và điều kiện.
          </li>
          <li>
            <strong>Điều kiện:</strong> Chịu trách nhiệm nếu gây hư hỏng hoặc vi
            phạm giao thông.
          </li>
          <li>
            <strong>Quyền lợi:</strong> Ưu đãi khi mua xe sau khi chạy thử.
          </li>
        </ul>
      </AccordionItem>
    </ul>
  );
}
