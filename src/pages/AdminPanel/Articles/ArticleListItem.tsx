import React, { useEffect, useRef, useState } from "react";

import { ArticleProps } from "../../../context/MainContextTypes";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminPanelArticleDropdown from "../../../components/AdminPanel/AdminPanelArticleDropdown";

type ArticleListItemProps = {
  article: ArticleProps;
  onDelete: (articleId: string) => void;
};

export default function ArticleListItem({
  article,
  onDelete,
}: ArticleListItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        e.target &&
        !(e.target as HTMLElement).closest(".user-dropdown")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        key={article.id}
        className="w-full h-auto flex flex-col justify-between px-4 py-3 gap-5 border rounded-md group relative .user-dropdown"
        ref={dropdownRef}
      >
        <div className="w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] justify-start items-center gap-5">
          <img
            src={article.img}
            alt=""
            className="w-10 h-8 rounded-md object-cover"
          />
          <h1 className="text-sm group-hover:underline line-clamp-2">
            {article.title}
          </h1>
          <p className="text-sm hidden md:block">
            {new Date(article.createdAt).toLocaleString()}
          </p>

          <button
            className="w-7 h-7 hover:bg-zinc-200 flex justify-center items-center rounded-full"
            onClick={handleToggleOpen}
          >
            <BsThreeDotsVertical size={14} />
          </button>
        </div>
        {isOpen && (
          <AdminPanelArticleDropdown
            to={article.id}
            handleToggleOpen={handleToggleOpen}
            article={article}
            onDelete={onDelete}
          />
        )}
      </div>
    </>
  );
}
