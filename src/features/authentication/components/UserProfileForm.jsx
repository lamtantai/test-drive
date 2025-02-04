import { useState } from "react";
import Input from "../../../components/Input";

export default function UserProfileForm({ user }) {
  const initialProfile = {
    name: "Tan Tai",
    phone: "0909090909",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  }

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        label="Email"
        name="email"
        value={user.email}
        disabled={true}
        readOnly
      />

      <Input
        type="text"
        label="Họ và tên"
        name="name"
        value={profile.name}
        onChange={handleChange}
        disabled={!isEditing}
      />

      <Input
        type="text"
        label="Số điện thoại"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        disabled={!isEditing}
      />

      {/* <div className="flex justify-end gap-4">
        {isEditing ? (
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
          >
            Lưu
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none"
          >
            Chỉnh sửa
          </button>
        )}
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setProfile(initialProfile);
              setIsEditing(false);
            }}
            className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none"
          >
            Hủy
          </button>
        )}
      </div> */}
    </form>
  );
}
