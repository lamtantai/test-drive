import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="relative mt-20 bg-blue-900 bg-cover bg-center px-6 py-20 text-white md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container relative z-10 mx-auto text-center">
        <h3 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Khám Phá Mẫu Xe Mới Nhất!
        </h3>
        <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed md:text-xl">
          Tìm ngay những mẫu xe phù hợp với nhu cầu của bạn và trải nghiệm lái
          thử.
        </p>
        <Link
          to="/cars"
          className="transform rounded-md bg-yellow-500 px-8 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-400"
        >
          Khám Phá Ngay
        </Link>
      </div>
    </div>
  );
}
