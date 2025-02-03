import CarListSlider from "../../../components/CarListSlider";
import useCars from "../../../hooks/useCars";

const carTypes = [
  { title: "Xe hybird", type: "hybird", scrollbarClass: "hybird" },
  { title: "Xe xăng", type: "diesel", scrollbarClass: "diesel" },
  { title: "Xe điện", type: "electric", scrollbarClass: "electric" },
];

export default function CarTypesSection({}) {
  const { cars, isLoading } = useCars();

  const filterCarsByType = (type) =>
    cars.filter((car) => car.engineType === type);

  return (
    <div className="mt-10 font-semibold">
      <div className="px-xs">
        <h2 className="text-4xl md:text-6xl">Các mẫu xe</h2>

        <p className="mt-4 max-w-[100ch] md:text-lg">
          Từ những chiếc <strong>xe Hybrid</strong> kết hợp giữa động cơ xăng và
          điện, mang lại sự tiết kiệm nhiên liệu vượt trội và giảm thiểu khí
          thải, đến những chiếc <strong>xe xăng</strong> với hiệu suất mạnh mẽ
          và linh hoạt, hay những chiếc <strong>xe điện</strong> êm ái, tiết
          kiệm chi phí bảo dưỡng và thân thiện với môi trường — mỗi loại xe đều
          mang lại những trải nghiệm khác biệt. Lựa chọn xe không chỉ dựa trên
          loại động cơ mà còn vào những trải nghiệm bạn sẽ có với nó, giúp bạn
          tìm được chiếc xe phù hợp nhất với nhu cầu và phong cách sống của
          mình.
        </p>
      </div>

      {carTypes.map(({ title, type, scrollbarClass }) => (
        <CarListSlider
          key={type}
          title={title}
          cars={filterCarsByType(type)}
          scrollbarClass={scrollbarClass}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
