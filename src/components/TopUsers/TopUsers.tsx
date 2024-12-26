import React, { useMemo } from "react";

import SidebarHeading from "../Article/SidebarHeading";
import { FaUsers } from "react-icons/fa";
import useMainContext from "../../hooks/useMainContext";
import TopUser from "./TopUser";

export default function TopUsers() {
  const { userList, articles } = useMainContext();

  const sortedUsers = useMemo(() => {
    return userList
      ?.map((user) => {
        const totalLikes = articles.filter((art) =>
          art.likes.some((like) => like.whoLiked === user.id)
        ).length;

        const totalComments = articles.reduce((total, art) => {
          const userCommentsCount = art.comments.filter(
            (comment) => comment.author === user.id
          ).length;
          return total + userCommentsCount;
        }, 0);

        const totalArticles = articles.filter(
          (art) => art.author === user.id
        ).length;

        return {
          ...user,
          totalLikes,
          totalComments,
          totalArticles,
        };
      })
      ?.sort(
        (a, b) =>
          b.totalComments - a.totalComments || b.totalArticles - a.totalArticles
      );
  }, [userList, articles]);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-5">
      <SidebarHeading text="Most active users" Icon={FaUsers} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-5">
        {sortedUsers?.slice(0, 4).map((user) => (
          <TopUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
