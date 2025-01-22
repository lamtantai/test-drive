import CTAButton from "../../components/CTAButton";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-var(--header-height))]">
      <img
        src="/background-car.png"
        alt=""
        className="bg-lightBlack h-full w-full object-cover brightness-75"
      />

      <div className="absolute inset-0 flex items-end px-xs pb-xs">
        <div className="w-full md:flex md:items-end md:justify-between">
          <h1 className="text-[clamp(1.5rem,0.5rem+5vw,4rem)]/tight font-bold uppercase text-secondary">
            Trải nghiệm lái thử, <br />
            cảm nhận ngay!
          </h1>

          <CTAButton
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
