export default function CardSkeleton() {
  return (
    <li className="from-lightGray to-lightGray via-secondary flex h-full flex-col gap-10 bg-gradient-to-r p-4">
      <div className="from-lightGray to-lightGray via-secondary bg-gradient-to-r">
        <div className="px-2 py-1"></div>
      </div>

      <div className="from-lightGray to-lightGray via-secondary aspect-video bg-gradient-to-r object-contain" />

      <div className="from-lightGray to-lightGray via-secondary bg-gradient-to-r text-xl font-bold">
        <h3 className="text-lightGray"></h3>
        <div className="flex justify-between">
          <h3 className="text-primary"></h3>
          <h3 className="text-primary"></h3>
        </div>
      </div>
    </li>
  );
}
