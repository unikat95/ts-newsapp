import React, { useState } from "react";
import { ArticleCardProps } from "./ArticleCard";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";

export default function ArticleCardImage({ article }: ArticleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full h-[16rem] md:w-[12rem] lg:w-[14rem] lg:h-[15rem] overflow-hidden">
      <ImageSkeleton
        img={article.img}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      />
      <img
        src={article.img}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-transform"
      />
    </div>
  );
}
