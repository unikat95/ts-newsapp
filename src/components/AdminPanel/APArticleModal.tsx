import React from "react";

import Button from "../ui/Button/Button";

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
      <div className="w-auto h-auto bg-white p-5 rounded-md flex flex-col justify-center items-center gap-5">
        <h1 className="w-full text-xl">Delete article</h1>
        <div className="text-sm">
          <p>Are you sure you want to delete the article?</p>
          <p> This action cannot be undone.</p>
        </div>
        <div className="w-full flex items-end justify-end gap-2">
          <Button variant="red" onClick={handleDeleteArticle} text="Confirm" />
          <Button variant="dark" onClick={handleCloseModal} text="Cancel" />
        </div>
      </div>
    </div>
  );
}
