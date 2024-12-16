import React from "react";

import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import APHeading from "./APHeading";

import { MdOutlineDateRange } from "react-icons/md";

export default function APLastArticles() {
  const { sortedArticles } = useMainContext();
  return (
    <>
      <APHeading text="Last articles" />

      <div className="w-full h-auto grid grid-cols-1 2xl:grid-cols-2 flex-col gap-2">
        {sortedArticles
          .map((article) => (
            <Link
              to={`/articles/article/${article.id}`}
              key={article.id}
              className="w-full h-auto bg-white flex justify-start items-center rounded-lg overflow-hidden group"
            >
              <div className="w-[10rem] h-full flex justify-start items-center5 p-5">
                <img
                  src={article.img}
                  alt=""
                  className="w-full h-14 bg-cover rounded-lg"
                />
              </div>
              <div className="w-full flex justify-start items-start">
                <h3 className="w-full group-hover:underline line-clamp-1">
                  {article.title}
                </h3>
              </div>
              <div className="bg-slate-100 h-full text-nowrap text-sm font-semibold text-slate-600 hidden md:flex justify-center items-center py-5 pr-5 relative">
                <p className="z-50">
                  Added: {new Date(article.createdAt).toLocaleString()}
                </p>
                <span className="w-16 h-16 bg-slate-100 rounded-full absolute -left-5 top-1/2 -translate-y-1/2 z-0"></span>
                <MdOutlineDateRange
                  size={140}
                  className="absolute right-0 -top-2 rotate-[20deg] text-slate-50"
                />
              </div>
            </Link>
          ))
          .slice(0, 4)}
      </div>
    </>
  );
}
