import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";

import { db } from "../../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

import Modal from "../../Modal/Modal";
import useMainContext from "../../../hooks/useMainContext";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import EditUserInput from "./EditUserInput";
import EditUserDatePicker from "./EditUserDatePicker";
import EditUserAvatar from "./EditUserAvatar";

import { MdSaveAs } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import Button from "../../ui/Button/Button";

type EditUserProfileProps = {
  isUserEditing: boolean;
  setIsUserEditing: React.Dispatch<SetStateAction<boolean>>;
  handleToggleUserEditor: () => void;
  setIsPopupOpen: React.Dispatch<SetStateAction<boolean>>;
  setPopupText: React.Dispatch<SetStateAction<string>>;
};

export default function EditUserModal({
  isUserEditing,
  setIsUserEditing,
  handleToggleUserEditor,
  setIsPopupOpen,
  setPopupText,
}: EditUserProfileProps) {
  const { currentUser } = useMainContext();
  const [formFields, setFormFields] = useState({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    birthDate: currentUser?.birthDate,
    avatar: currentUser?.avatar,
    about: currentUser?.about,
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isUserEditing) {
      setFormFields({
        firstName: currentUser?.firstName || "",
        lastName: currentUser?.lastName || "",
        birthDate: currentUser?.birthDate || "",
        avatar: currentUser?.avatar || "",
        about: currentUser?.about || "",
      });
    }
  }, [isUserEditing, currentUser]);

  const userRef = currentUser ? doc(db, "users", currentUser?.id) : null;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);

    if (userRef) {
      try {
        await new Promise((res) =>
          setTimeout(() => {
            res;
            updateDoc(userRef, {
              firstName: formFields.firstName,
              lastName: formFields.lastName,
              birthDate: formFields.birthDate,
              avatar: formFields.avatar,
              about: formFields.about,
              completed: true,
            });
            setIsSaving(false);
            setIsUserEditing(false);
            setIsPopupOpen(true);
            setPopupText("User information successfully saved");
          }, 1000)
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={isUserEditing}>
      <div className="w-full flex flex-col justify-center items-start p-5 gap-5 relative">
        <div className="w-full flex flex-col">
          <form className="w-full flex flex-col md:flex-row justify-center gap-10 p-10">
            <EditUserAvatar
              formField={formFields.avatar}
              formFieldFirstSlice={formFields.firstName}
              formFieldLastSlice={formFields.lastName}
              setFormFields={setFormFields}
            />
            <div className="w-full flex flex-col gap-5 justify-start items-start">
              <div className="w-full flex gap-5">
                <EditUserInput
                  name="firstName"
                  text="First name:"
                  formField={formFields.firstName}
                  handleInputChange={handleInputChange}
                />
                <EditUserInput
                  name="lastName"
                  text="Last name:"
                  formField={formFields.lastName}
                  handleInputChange={handleInputChange}
                />
              </div>
              <EditUserDatePicker
                formField={formFields.birthDate}
                handleInputChange={handleInputChange}
              />
              <EditUserInput
                name="avatar"
                text="Avatar url:"
                formField={formFields.avatar}
                handleInputChange={handleInputChange}
              />
              <label htmlFor="about" className="w-full flex flex-col gap-2">
                About:
                <textarea
                  name="about"
                  className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
                  value={formFields.about}
                  onChange={handleInputChange}
                  cols={30}
                  rows={5}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <Button
            variant="dark"
            onClick={handleSubmit}
            Icon={MdSaveAs}
            disabled={
              !formFields.firstName ||
              !formFields.lastName ||
              !formFields.birthDate
            }
            text="Save"
          />
          {currentUser?.completed && (
            <Button
              variant="red"
              onClick={handleToggleUserEditor}
              Icon={TbCancel}
              text="Cancel"
            />
          )}
        </div>
        {isSaving && (
          <span className="w-full h-full bg-white bg-opacity-70 absolute top-0 left-0 flex justify-center items-center">
            <LoadingSpinner size={30} />
          </span>
        )}
      </div>
    </Modal>
  );
}
