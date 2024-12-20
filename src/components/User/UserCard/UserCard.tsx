import React from "react";
import { UserProps } from "../../../context/MainContextTypes";
import UserAvatar from "../UserAvatar/UserAvatar";

type UserCardProps = {
  user: UserProps;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <>
      <div className="w-full h-full bg-white border p-5 flex justify-between items-center">
        <UserAvatar size="xs" user={user} />
        <div>
          <p>{user.firstName + " " + user.lastName}</p>
        </div>
      </div>
    </>
  );
}
