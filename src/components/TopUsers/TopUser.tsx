import React from "react";
import { UserProps } from "../../context/MainContextTypes";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbArticleFilled } from "react-icons/tb";

type TopUserProps = {
  user: UserProps & {
    totalComments: number;
    totalLikes: number;
    totalArticles: number;
  };
};

export default function TopUser({ user }: TopUserProps) {
  return (
    <Link
      to={`/users/user/${user.id}`}
      className="w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden main-shadow relative group"
    >
      <div
        className="w-full h-full flex justify-center items-center relative pt-24 p-5"
        style={{
          backgroundImage: `url("${user.userProfileBg}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#3d3d3d",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-auto h-auto absolute top-8 flex justify-center items-center z-[100] group-hover:-translate-y-1 group-hover:scale-[1.02] transition-transform">
            <UserAvatar size="md" user={user} />
          </div>
          <div className="w-full bg-white flex flex-col justify-center items-center gap-3 px-5 pt-10 py-5 rounded-xl z-[30] main-shadow">
            <p className="text-base font-semibold text-primary-text group-hover:underline line-clamp-1">
              {user?.firstName + " " + user?.lastName}
            </p>
            <div className="flex justify-center items-center gap-3 text-base">
              <p className="bg-slate-100 py-2 px-3 flex justify-center items-center gap-1 rounded-lg text-sm">
                <AiFillLike size={16} className="text-blue-500 mb-[3px]" />
                {user.totalLikes}
              </p>
              <p className="bg-slate-100 py-2 px-3 flex justify-center items-center gap-2 rounded-lg text-sm">
                <FaCommentDots size={16} className="text-orange-500 mb-[3px]" />
                {user.totalComments}
              </p>
              {user.role === "administrator" && (
                <p className="bg-slate-100 py-2 px-3 flex justify-center items-center gap-2 rounded-lg text-sm">
                  <TbArticleFilled
                    size={16}
                    className="text-zinc-700 mb-[3px]"
                  />
                  {user.totalArticles}
                </p>
              )}
            </div>
          </div>
        </div>
        <span className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-10"></span>
      </div>
    </Link>
  );
}
