import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";

import { db } from "../../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

import Modal from "../../Modal/Modal";
import useMainContext from "../../../hooks/useMainContext";
import CTAButton from "../../CTAButton/CTAButton";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import EditUserInput from "./EditUserInput";
import EditUserDatePicker from "./EditUserDatePicker";
import EditUserAvatar from "./EditUserAvatar";

import { MdSaveAs } from "react-icons/md";
import { TbCancel } from "react-icons/tb";

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
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isUserEditing) {
      setFormFields({
        firstName: currentUser?.firstName || "",
        lastName: currentUser?.lastName || "",
        birthDate: currentUser?.birthDate || "",
        avatar: currentUser?.avatar || "",
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <CTAButton
            text="Save"
            Icon={MdSaveAs}
            variant="dark"
            handleSubmit={handleSubmit}
            disabled={
              !formFields.firstName ||
              !formFields.lastName ||
              !formFields.birthDate
            }
          />
          {currentUser?.completed && (
            <CTAButton
              text="Cancel"
              Icon={TbCancel}
              variant="red"
              onClick={handleToggleUserEditor}
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
