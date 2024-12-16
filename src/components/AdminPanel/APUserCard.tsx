import React, { useEffect, useState } from "react";
import useMainContext from "../../hooks/useMainContext";
import APUserCardStatItem from "./APUserCardStatItem";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function APUserCard() {
  const { currentUser, articles } = useMainContext();
  const [totalArticles, setTotalArticles] = useState<number>();
  const [totalComments, setTotalComments] = useState<number>();

  useEffect(() => {
    if (currentUser) {
      const userLikes = articles.filter((art) =>
        art.likes.some((like) => like.whoLiked == currentUser.id)
      );

      const userComments = articles.filter((art) =>
        art.comments.some((comment) => comment.author === currentUser.id)
      );

      setTotalArticles(userLikes.length);
      setTotalComments(userComments.length);
    }
  }, [articles]);

  const userArticles = articles.filter((art) => art.author === currentUser?.id);

  return (
    <div className=" flex-col justify-between items-start gap-5 row-span-2 col-span-2 lg:col-span-1">
      <div className="w-full h-full bg-white rounded-xl shadow-sm flex flex-col justify-start items-start relative p-5 gap-5">
        <div className="absolute -top-7 right-3 rounded-2xl border-[10px] border-slate-200">
          <UserAvatar size="ap" user={currentUser} />
        </div>
        <div className="w-2/3 h-full flex flex-col gap-1">
          <p className="text-xl text-zinc-600 font-semibold">
            {currentUser?.firstName + " " + currentUser?.lastName}
          </p>
          <p className="text-base text-orange-600 font-semibold">
            {currentUser?.role}
          </p>
        </div>
        <div className="w-full flex justify-between md:justify-end gap-5 items-center">
          <APUserCardStatItem text="Articles" color="blue">
            {userArticles.length}
          </APUserCardStatItem>
          <APUserCardStatItem text="Comments" color="yellow">
            {totalComments}
          </APUserCardStatItem>
          <APUserCardStatItem text="Likes" color="red">
            {totalArticles}
          </APUserCardStatItem>
        </div>
      </div>
    </div>
  );
}
