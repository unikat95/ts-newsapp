import React from "react";

type APArticleModalProps = {
  handleCloseModal: () => void;
  handleDeleteArticle: () => void;
};

export default function APArticleModal({
  handleCloseModal,
  handleDeleteArticle,
}: APArticleModalProps) {
  return (
    <div className="w-full h-full bg-black bg-opacity-20 flex justify-center items-center fixed top-0 left-0 z-[999]">
      <div className="w-auto h-auto bg-white p-5 rounded-md flex flex-col justify-center items-center gap-7">
        <div className="text-sm">
          <p>Are you sure you want to delete the article?</p>
          <p> This action cannot be undone.</p>
        </div>
        <div className="w-full flex items-end justify-end gap-2">
          <button
            className="hover:bg-zinc-800 px-4 py-2 hover:text-white rounded-md text-sm"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="hover:bg-red-500 px-4 py-2 hover:text-white rounded-md text-sm"
            onClick={handleDeleteArticle}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
