import React, { useState } from "react";
import useMainContext from "../../hooks/useMainContext";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { getCategoriesColor } from "../../utils/ThemeUtils";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";

type MostLikedArticleProps = {
  number: number;
};

export default function MostLikedArticle({ number }: MostLikedArticleProps) {
  const { articles, userList, setCategoryToDisplay } = useMainContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const sortedByLikes = [...articles].sort(
    (a, b) => b.likes.length - a.likes.length
  );
  return (
    <div className="w-full h-full col-span-1 relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-black hover:after:to-slate-950 z-0 group rounded-xl overflow-hidden main-shadow">
      {sortedByLikes
        .map((art) => {
          const author = userList?.find((user) => user.id === art.author);
          return (
            <div
              key={art.id}
              className="w-full h-[15rem] bg-cover bg-center flex group"
            >
              <div className="w-full h-full">
                <ImageSkeleton
                  img={art.img}
                  imageLoaded={imageLoaded}
                  setImageLoaded={setImageLoaded}
                />
                <img
                  src={art.img}
                  alt=""
                  className="w-full h-full bg-cover bg-center"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 p-5 flex flex-col justify-end items-start text-white z-50 gap-3">
                <div className="w-full flex flex-col gap-2 justify-start items-start">
                  <Link
                    to="/articles"
                    className={`px-3 py-1 text-sm font-medium rounded-md
                ${getCategoriesColor(art.category)}`}
                    onClick={() => setCategoryToDisplay(art.category)}
                  >
                    {art.category}
                  </Link>
                  <Link
                    to={`/articles/article/${art.id}`}
                    className="line-clamp-2 text-2xl font-normal hover:underline"
                  >
                    {art.title}
                  </Link>
                </div>
                <div className="w-full flex justify-between items-center">
                  <Link
                    to={`/users/user/${art.author}`}
                    className="text-sm line-clamp-1 flex justify-center items-center gap-2 hover:underline"
                  >
                    <UserAvatar size="xs" user={author} />
                    {author?.firstName}
                  </Link>
                  <div className="flex justify-center items-center gap-3 text-sm">
                    <p className="flex justify-center items-center gap-1">
                      <AiFillLike size={18} />
                      {art.likes.length}
                    </p>
                    <p className="flex justify-center items-center gap-2">
                      <FaCommentDots size={18} />
                      {art.comments.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        .slice(number, number + 1)}
    </div>
  );
}
