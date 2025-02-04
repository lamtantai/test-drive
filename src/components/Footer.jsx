import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-xs py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Thông tin công ty</h3>
            <Link to="/about" className="mb-2 hover:text-yellow-400">
              Giới thiệu
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Dịch vụ</h3>
            <Link to="/cars" className="mb-2 hover:text-yellow-400">
              Các mẫu xe
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Liên hệ</h3>
            <ul>
              <li className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>+84 123 456 789</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <button className="text-2xl hover:text-yellow-400">
                <AiFillFacebook />
              </button>
              <button className="text-2xl hover:text-yellow-400">
                <AiFillInstagram />
              </button>
              <button className="text-2xl hover:text-yellow-400">
                <AiFillTwitterCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
