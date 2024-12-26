import React, { SetStateAction, useEffect } from "react";

type ImageSkeletonProps = {
  img: string | undefined;
  imageLoaded: boolean;
  setImageLoaded: React.Dispatch<SetStateAction<boolean>>;
};

export default function ImageSkeleton({
  img,
  imageLoaded,
  setImageLoaded,
}: ImageSkeletonProps) {
  useEffect(() => {
    const image = new Image();
    image.src = img || "";
    image.onload = () => setImageLoaded(true);
  }, []);
  return (
    <>
      {!imageLoaded && (
        <div className="w-full h-full bg-zinc-600 animate-pulse"></div>
      )}
    </>
  );
}
