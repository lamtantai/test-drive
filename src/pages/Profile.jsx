import React from "react";
import useUser from "../features/authentication/hooks/useUser";
import UserProfileForm from "../features/authentication/components/UserProfileForm";

export default function Profile() {
  const { user } = useUser();

  return <UserProfileForm user={user} />;
}
