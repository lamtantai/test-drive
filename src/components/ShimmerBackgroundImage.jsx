export default function ShimmerBackgroundImage({ src, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className="from-lightGray to-lightGray via-secondary h-full bg-gradient-to-r object-cover"
    />
  );
}
