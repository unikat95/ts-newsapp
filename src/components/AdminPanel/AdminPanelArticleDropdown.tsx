import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
import { ArticleProps } from "../../context/MainContextTypes";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

type AdminPanelArticleDropdownProps = {
  to: string;
  handleToggleOpen: () => void;
  article: ArticleProps;
};

export default function AdminPanelArticleDropdown({
  to,
  handleToggleOpen,
  article,
}: AdminPanelArticleDropdownProps) {
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
              to={`/articles/article/${to}`}
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleToggleOpen}
            >
              <RiExternalLinkFill size={17} />
              Go to article
            </Link>
          </li>
          <li className="w-full rounded-md overflow-hidden">
            <button
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleToggleOpen}
            >
              <FaRegEdit size={17} />
              Edit article
            </button>
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
          <div className="w-full h-full bg-black bg-opacity-10 flex justify-center items-center fixed top-0 left-0 z-[999]">
            <div className="w-auto h-auto bg-white p-5 rounded-md flex flex-col justify-center items-center gap-7">
              <div className="text-sm">
                <p>Are you sure you want to delete the article?</p>
                <p> This action cannot be undone.</p>
                <p>Article: {article.title}</p>
              </div>
              <div className="w-full flex items-end justify-end gap-2">
                <button
                  className="hover:bg-zinc-800 px-4 py-2 hover:text-white rounded-md text-sm"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-zinc-800 hover:bg-red-500 px-4 py-2 text-white rounded-md text-sm"
                  onClick={handleDeleteArticle}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
