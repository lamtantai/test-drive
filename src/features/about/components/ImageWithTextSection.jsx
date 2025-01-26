import CTAButton from "../../../components/CTAButton";

export default function ImageWithTextSection({
  imageSrc,
  imageFirst,
  heading,
  text,
  ctaLabel,
  ctaHref,
}) {
  return (
    <section className="px-xs lg:grid lg:grid-cols-2">
      <div
        className={`bg-lightGray ${imageFirst ? "lg:order-first" : "lg:order-last"}`}
      >
        <img
          src={imageSrc}
          alt=""
          loading="lazy"
          className="aspect-[5/4] w-full object-cover"
        />
      </div>

      <div className="mx-auto flex max-w-[65ch] flex-col justify-center gap-5 px-xs py-10 text-center lg:text-start">
        <h2 className="text-2xl font-extrabold uppercase xl:text-4xl">
          {heading}
        </h2>

        <p className="text-balance text-lightBlack md:text-lg xl:text-2xl">
          {text}
        </p>

        {ctaLabel && ctaHref && (
          <div>
            <CTAButton label={ctaLabel} href={ctaHref} />
          </div>
        )}
      </div>
    </section>
  );
}
