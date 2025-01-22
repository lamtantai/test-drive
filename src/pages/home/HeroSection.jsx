import LinkButton from "../../components/LinkButton";

export default function HeroSection() {
  return (
    <section className="h-screen">
      <img
        src="/background-car.png"
        alt=""
        className="bg-lightGray h-full w-full object-cover brightness-75"
      />

      <div className="px-xs pb-xs absolute inset-0 flex items-end">
        <div className="w-full md:flex md:items-end md:justify-between">
          <h1 className="text-secondary text-[clamp(1.5rem,0.5rem+5vw,4rem)]/tight font-bold uppercase">
            Trải nghiệm lái thử, <br />
            cảm nhận ngay!
          </h1>

          <LinkButton
            label="Đặt lịch lái thử"
            href="/"
            outlined
            className="mt-xs"
          />
        </div>
      </div>
    </section>
  );
}
