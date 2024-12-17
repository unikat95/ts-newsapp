import React, { ChangeEvent, useState } from "react";

import useMainContext from "../hooks/useMainContext";
import useLoading from "../hooks/useLoading";
import APLoading from "../components/AdminPanel/APLoading";
import UserProfile from "../components/User/UserProfile/UserProfile";
import EditBackgroundModal from "../components/User/EditBackgroundModal/EditBackgroundModal";
import EditUserModal from "../components/User/EditUserModal/EditUserModal";
import PopupMessage from "../components/PopupMessage/PopupMessage";

export default function Profile() {
  const { currentUser } = useMainContext();
  const [isUserBgEditing, setIsUserBgEditing] = useState(false);
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [bgImage, setBgImage] = useState(currentUser?.userProfileBg);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupText, setPopupText] = useState("");

  const loader = useLoading();
  if (loader) return <APLoading />;

  const handleToggleUserBgEditor = () => {
    setIsUserBgEditing(!isUserBgEditing);
  };

  const handleToggleUserEditor = () => {
    setIsUserEditing(!isUserEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBgImage(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-end gap-5">
      <UserProfile
        user={currentUser}
        handleToggleUserBgEditor={handleToggleUserBgEditor}
        handleToggleUserEditor={handleToggleUserEditor}
      />
      <EditBackgroundModal
        isUserBgEditing={isUserBgEditing}
        setIsUserBgEditing={setIsUserBgEditing}
        bgImage={bgImage}
        handleInputChange={handleInputChange}
        handleToggleUserBgEditor={handleToggleUserBgEditor}
        setIsPopupOpen={setIsPopupOpen}
        setPopupText={setPopupText}
      />
      <EditUserModal
        isUserEditing={!currentUser?.completed || isUserEditing}
        setIsUserEditing={setIsUserEditing}
        handleToggleUserEditor={handleToggleUserEditor}
        setIsPopupOpen={setIsPopupOpen}
        setPopupText={setPopupText}
      />
      <PopupMessage
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        text={popupText}
      />
    </div>
  );
}
