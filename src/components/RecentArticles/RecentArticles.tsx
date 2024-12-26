import React from "react";

import RecentArticlesItem from "./RecentArticlesItem";
import SidebarHeading from "../Article/SidebarHeading";
import { MdArticle } from "react-icons/md";

export default function RecentArticles() {
  return (
    <div className="w-full flex flex-col gap-5">
      <SidebarHeading
        text="Recent articles"
        fontSize="text-xl font-medium"
        Icon={MdArticle}
      />
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="w-full h-[15rem] lg:h-[30rem] col-span-1 relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-black hover:after:to-slate-950 z-0 group rounded-xl overflow-hidden main-shadow">
          <RecentArticlesItem sortA={0} sortB={1} />
        </div>
        <div className="w-full h-[45rem] md:h-[30rem] grid grid-cols-2 gap-5">
          <div className="w-full col-span-2 overflow-hidden relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-black hover:after:to-slate-950 z-0 group rounded-xl main-shadow">
            <RecentArticlesItem sortA={1} sortB={2} />
          </div>
          <div className="w-full col-span-2 md:col-span-1 overflow-hidden relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-black hover:after:to-slate-950 z-0 group rounded-xl main-shadow">
            <RecentArticlesItem sortA={2} sortB={3} />
          </div>
          <div className="w-full col-span-2 md:col-span-1 overflow-hidden relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-black hover:after:to-slate-950 z-0 group rounded-xl main-shadow">
            <RecentArticlesItem sortA={3} sortB={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
