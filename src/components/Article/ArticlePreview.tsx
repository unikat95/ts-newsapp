import React, { SetStateAction } from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleTitle from "./ArticleTitle";
import ArticleImg from "./ArticleImg";
import ArticleText from "./ArticleText";
import useMainContext from "../../hooks/useMainContext";
import { IoIosCloseCircle } from "react-icons/io";
import { ArticleProps } from "../../context/MainContextTypes";

type ArticlePreviewProps = {
  article: ArticleProps | undefined;
  formField: { title: string; img: string; text: string };
  setOpenPreview: React.Dispatch<SetStateAction<boolean>>;
};

export default function ArticlePreview({
  article,
  formField,
  setOpenPreview,
}: ArticlePreviewProps) {
  const { userList } = useMainContext();
  const author = userList?.find((user) => user.id === article?.author);
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-20 z-[999] flex justify-center items-center md:px-10">
        <div className="w-full max-w-[1400px] h-full md:max-h-[80%] bg-white flex flex-col justify-center items-end gap-10 p-5 mr-54 md:rounded-xl relative">
          <button onClick={() => setOpenPreview(false)}>
            <IoIosCloseCircle
              size={30}
              className="text-slate-500 hover:text-red-500 absolute top-5 right-5"
            />
          </button>
          <div className="w-full h-full bg-white flex flex-col gap-5 overflow-auto px-10">
            <ArticleAuthor author={author} />
            <ArticleTitle
              createdAt={article?.createdAt}
              title={formField?.title}
            />
            <ArticleImg img={formField?.img} />
            <ArticleText text={formField?.text} />
          </div>
        </div>
      </div>
    </>
  );
}
