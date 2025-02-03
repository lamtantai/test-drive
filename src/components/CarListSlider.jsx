import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";

import CarCardItem from "./CarCardItem";
import CTAButton from "./CTAButton";

export default function CarListSlider({ title, cars, scrollbarClass }) {
  return (
    <section>
      <div className="flex items-center justify-between px-xs pt-16 lg:pt-32">
        <h2 className="text-3xl font-semibold lg:text-5xl">{title}</h2>

        <div className="">
          <CTAButton label="Tất cả xe" href="/cars" />
        </div>
      </div>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1280: {
            slidesPerView: 3,
          },

          1536: {
            slidesPerView: 4,
          },
        }}
        scrollbar={{
          el: `.${scrollbarClass}`,
          draggable: true,
        }}
        className="!p-xs"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCardItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mx-auto w-3/4 max-w-[50rem] border border-primary p-[2px]">
        <div className={`${scrollbarClass} w-full`}>
          <div className="swiper-scrollbar-drag h-3 bg-accent"></div>
        </div>
      </div>
    </section>
  );
}
