import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";

import CarCardItem from "./CarCardItem";

export default function OtherCars({ cars }) {
  return (
    <section>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },

          1280: {
            slidesPerView: 4,
          },
        }}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
        }}
        className="!p-2"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCardItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mx-auto w-3/4 max-w-[50rem] border border-primary p-[2px]">
        <div className="swiper-scrollbar w-full">
          <div className="swiper-scrollbar-drag h-3 bg-accent"></div>
        </div>
      </div>
    </section>
  );
}
