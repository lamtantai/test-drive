import { Link } from "react-router-dom";

export default function Step({ icon, text1, text2 }) {
  return (
    <li className="py-6">
      <Link
        to="/cars"
        className="grid auto-rows-min grid-cols-[50px,1fr] gap-x-4"
      >
        <span className="w-fit rounded-full border border-secondary p-2 text-xl">
          {icon}
        </span>

        <div className="col-span-full col-start-2 text-2xl">
          <h2 className="mr-4 inline-block capitalize">{text1}</h2>
          <span className="">&#129122;</span>
        </div>

        <p className="text-lightBlack col-span-full col-start-2 w-full text-sm">
          {text2}
        </p>
      </Link>
    </li>
  );
}
