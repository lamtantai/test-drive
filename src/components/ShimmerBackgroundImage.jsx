export default function ShimmerBackgroundImage({ src, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className="from-lightBlack to-lightBlack h-full bg-gradient-to-r via-secondary object-cover"
    />
  );
}
