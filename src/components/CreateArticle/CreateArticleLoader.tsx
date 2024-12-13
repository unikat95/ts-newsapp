import React from "react";
import { PuffLoader } from "react-spinners";

export default function CreateArticleLoader() {
  return (
    <div className="w-full h-full bg-white bg-opacity-40 flex justify-center items-center absolute top-0 left-0">
      <PuffLoader color="#5ac3f8" />
    </div>
  );
}
