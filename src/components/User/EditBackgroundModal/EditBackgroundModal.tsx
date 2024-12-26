import React, { ChangeEvent, SetStateAction, useState } from "react";

import Modal from "../../Modal/Modal";
import CreateArticleInput from "../../CreateArticle/CreateArticleInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import useMainContext from "../../../hooks/useMainContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import Button from "../../ui/Button/Button";

type UserEditBackgroundModalProps = {
  isUserBgEditing: boolean;
  setIsUserBgEditing: React.Dispatch<SetStateAction<boolean>>;
  bgImage: string | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleToggleUserBgEditor: () => void;
  setIsPopupOpen: React.Dispatch<SetStateAction<boolean>>;
  setPopupText: React.Dispatch<SetStateAction<string>>;
};

export default function EditBackgroundModal({
  isUserBgEditing,
  setIsUserBgEditing,
  bgImage,
  handleInputChange,
  handleToggleUserBgEditor,
  setIsPopupOpen,
  setPopupText,
}: UserEditBackgroundModalProps) {
  const { currentUser } = useMainContext();
  const [saveImage, setSaveImage] = useState(false);

  const userRef = currentUser ? doc(db, "users", currentUser?.id) : null;

  const handleSubmit = async () => {
    setSaveImage(true);
    if (userRef) {
      try {
        await new Promise((res) =>
          setTimeout(() => {
            res;
            updateDoc(userRef, {
              userProfileBg: bgImage,
            });
            setIsUserBgEditing(false);
            setSaveImage(false);
            setIsPopupOpen(true);
            setPopupText("User cover image successfully saved");
          }, 1000)
        );
        console.log("bg Updated!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Modal isOpen={isUserBgEditing}>
      <div className="w-full flex flex-col justify-center items-start gap-10 p-5 relative">
        <div className="w-full h-[20rem] object-cover object-center rounded-md overflow-hidden">
          {bgImage ? (
            <img
              src={bgImage === "" ? currentUser?.userProfileBg : bgImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-[20rem] bg-zinc-200 object-cover object-center rounded-md overflow-hidden"></div>
          )}
        </div>
        <div className="w-full flex flex-col gap-3">
          <h2>Image url:</h2>
          <div className="w-[40rem]">
            <CreateArticleInput
              handleInputChange={handleInputChange}
              name="bgImage"
              formField={bgImage}
              placeholder="enter background image..."
            />
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <Button variant="dark" onClick={handleSubmit} text="Save" />
          <Button
            variant="red"
            onClick={handleToggleUserBgEditor}
            text="Cancel"
          />
        </div>
      </div>
      {saveImage && (
        <span className="w-full h-full bg-white bg-opacity-70 absolute top-0 left-0 flex justify-center items-center">
          <LoadingSpinner size={30} />
        </span>
      )}
    </Modal>
  );
}
