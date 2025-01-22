export default function CarFeatureItem({ icon, label, value }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <span className="inline-block border border-lightGray p-4 text-4xl">
        {icon}
      </span>
      <div className="font-semibold">
        {value} {label}
      </div>
    </li>
  );
}
