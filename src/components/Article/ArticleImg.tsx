import React, { useState } from "react";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";

type ArticleImgProps = {
  img: string | undefined;
};

export default function ArticleImg({ img }: ArticleImgProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden">
      <ImageSkeleton
        img={img}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      />
      <img
        src={img}
        alt="article_image"
        className="w-full h-80 object-cover"
        onLoad={() => setImageLoaded(false)}
      ></img>
    </div>
  );
}
