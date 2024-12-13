import React, { SetStateAction, useState } from "react";

import { Link } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
import { ArticleProps } from "../../context/MainContextTypes";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import APArticleModal from "./APArticleModal";

export type APArticleDropdownProps = {
  to: string;
  handleToggleOpen: () => void;
  article: ArticleProps;
  onDelete?: (articleId: string) => void;
  link: string;
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
};

export default function APArticleDropdown({
  to,
  handleToggleOpen,
  article,
  onDelete,
  link,
}: APArticleDropdownProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleToggleOpen();
  };

  const handleDeleteArticle = async () => {
    try {
      await deleteDoc(doc(db, "articles", article.id));
      if (onDelete) {
        onDelete(article.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      handleToggleOpen();
    }
  };

  return (
    <>
      <div className="bg-white absolute right-5 top-10 shadow-md border z-[999] rounded-lg overflow-hidden">
        <ul className="w-full text-sm flex flex-col justify-start items-start p-2 gap-1">
          <li className="w-full rounded-md overflow-hidden">
            <Link
              to={`${link}${to}`}
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleToggleOpen}
            >
              <RiExternalLinkFill size={17} />
              Go to article
            </Link>
          </li>
          <li className="w-full rounded-md overflow-hidden">
            <Link
              to={`/admin-panel/edit-article/${article.id}`}
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleToggleOpen}
            >
              <FaRegEdit size={17} />
              Edit article
            </Link>
          </li>
          <li className="w-full rounded-md overflow-hidden">
            <button
              className="w-full hover:bg-red-500 text-black hover:text-white flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleOpenModal}
            >
              <MdOutlineDeleteOutline size={17} />
              Delete article
            </button>
          </li>
        </ul>
        {isModalOpen && (
          <APArticleModal
            handleCloseModal={handleCloseModal}
            handleDeleteArticle={handleDeleteArticle}
          />
        )}
      </div>
    </>
  );
}
