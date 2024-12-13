import React, { SetStateAction, useEffect, useState } from "react";

import debounce from "lodash.debounce";

import { ArticleProps, UserProps } from "../../context/MainContextTypes";

import { IoIosSearch } from "react-icons/io";
import useMainContext from "../../hooks/useMainContext";

type APArticleSearchProps = {
  setArticlesToDisplay?: React.Dispatch<React.SetStateAction<ArticleProps[]>>;
  setUsersToDisplay?: React.Dispatch<React.SetStateAction<UserProps[] | null>>;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  sortedArticles?: ArticleProps[];
  userList?: UserProps[] | null;
  placeholder: string;
};

export default function APSearch({
  setArticlesToDisplay,
  setUsersToDisplay,
  setLoading,
  sortedArticles,
  userList,
  placeholder,
}: APArticleSearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const { editLoading, setEditLoading } = useMainContext();

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  }, 600);

  useEffect(() => {
    if (sortedArticles && setArticlesToDisplay) {
      setLoading(true);
      const timeout = setTimeout(() => {
        const filteredArticles = sortedArticles.filter((article) =>
          article.title.toLowerCase().includes(searchValue)
        );
        setArticlesToDisplay(filteredArticles);
        setLoading(false);
      }, 400);

      return () => clearTimeout(timeout);
    } else if (userList && setUsersToDisplay) {
      setLoading(true);
      const timeout = setTimeout(() => {
        const filteredUsers = userList.filter(
          (article) =>
            article.firstName.toLowerCase().includes(searchValue) ||
            article.lastName.toLowerCase().includes(searchValue)
        );
        setUsersToDisplay(filteredUsers);
        setLoading(false);
        setEditLoading(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [searchValue, editLoading]);

  return (
    <label className="w-full bg-white border focus:border-blue-500 p-3 outline-none rounded-xl text-base flex justify-strart items-center gap-2">
      <IoIosSearch size={22} className="text-slate-500" />
      <input
        type="text"
        className="outline-none"
        placeholder={placeholder}
        onInput={handleSearch}
      />
    </label>
  );
}
