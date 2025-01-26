import ImageWithTextSection from "../features/about/components/ImageWithTextSection";

export default function About() {
  return (
    <>
      <ImageWithTextSection
        imageSrc="/RENT-CAR.png"
        heading="Về chúng tôi"
        text="Chào mừng bạn đến với Test & Drive - dịch vụ cho thuê xe lái thử trước khi mua! Chúng tôi cung cấp cho bạn cơ hội trải nghiệm trực tiếp các mẫu xe mới, giúp bạn đưa ra quyết định mua sắm chính xác và tự tin."
        imageFirst={false}
      />

      <ImageWithTextSection
        imageSrc="/ALL-CAR.png"
        heading="Lựa chọn đa dạng"
        text="Chúng tôi cung cấp nhiều loại xe mới nhất, phù hợp với nhu cầu và sở thích của từng khách hàng. Dù bạn đang tìm một chiếc xe gia đình, xe thể thao hay xe sang trọng, Test & Drive đều có những lựa chọn tối ưu để bạn thoải mái trải nghiệm."
        imageFirst={true}
      />

      <ImageWithTextSection
        imageSrc="/TEST-DRIVE.png"
        heading="Lái thử thoải mái"
        text="Với thời gian lái thử linh hoạt và điều kiện lái thử thoải mái, bạn có thể trải nghiệm thực tế cảm giác lái của mỗi mẫu xe trong môi trường đường xá đa dạng. Hãy tự do lái thử trong khu vực mà bạn chọn để cảm nhận rõ ràng sự khác biệt giữa các mẫu xe."
        imageFirst={false}
      />

      <ImageWithTextSection
        imageSrc="/CHECK-CAR.png"
        heading="Dịch vụ an toàn"
        text="Chúng tôi luôn đảm bảo rằng mỗi chiếc xe được kiểm tra kỹ lưỡng và bảo dưỡng định kỳ để đạt tiêu chuẩn cao nhất về an toàn và hiệu suất. Bạn có thể hoàn toàn yên tâm khi lái thử, vì mỗi chiếc xe đều được bảo dưỡng kỹ càng và kiểm tra chất lượng trước khi đến tay khách hàng."
        imageFirst={true}
      />

      <ImageWithTextSection
        imageSrc="/BOOKING.png"
        heading="Đặt lịch lái thử ngay"
        text="Việc đặt lịch lái thử chưa bao giờ dễ dàng đến thế! Chỉ cần vài thao tác đơn giản trên điện thoại hoặc máy tính, bạn có thể dễ dàng chọn mẫu xe và thời gian phù hợp để trải nghiệm. Chúng tôi cam kết mang đến sự thuận tiện tối đa để bạn có thể trải nghiệm lái thử một cách nhanh chóng và hiệu quả."
        ctaLabel="Chọn xe và đặt lịch"
        ctaHref="/cars"
        imageFirst={false}
      />
    </>
  );
}
