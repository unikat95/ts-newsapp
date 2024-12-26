import React from "react";

import SidebarHeading from "../Article/SidebarHeading";
import MostLikedArticle from "./MostLikedArticle";
import { AiFillLike } from "react-icons/ai";

export default function MostLikedArticles() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <SidebarHeading
        text="Most liked articles"
        color="orange"
        Icon={AiFillLike}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
        <MostLikedArticle number={0} />
        <MostLikedArticle number={1} />
        <MostLikedArticle number={2} />
      </div>
    </div>
  );
}
