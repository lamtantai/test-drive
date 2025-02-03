import React from "react";
import UserProfileForm from "../features/profile/components/UserProfileForm";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { user } = useUser();

  return <UserProfileForm user={user} />;
}
