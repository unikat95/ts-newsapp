import React from "react";

type ArticleImgProps = {
  img: string;
};

export default function ArticleImg({ img }: ArticleImgProps) {
  return (
    <img
      src={img}
      alt="article_image"
      className="w-full h-80 object-cover rounded-xl"
    ></img>
  );
}
