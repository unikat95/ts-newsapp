import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";

import Modal from "../../Modal/Modal";
import useMainContext from "../../../hooks/useMainContext";
import CTAButton from "../../CTAButton/CTAButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { FaTrashAlt } from "react-icons/fa";

type EditUserProfileProps = {
  isUserEditing: boolean;
  setIsUserEditing: React.Dispatch<SetStateAction<boolean>>;
  handleToggleUserEditor: () => void;
};

export default function EditUserModal({
  isUserEditing,
  setIsUserEditing,
  handleToggleUserEditor,
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
          <form className="w-full flex flex-col md:flex-row justify-center gap-5">
            <label
              htmlFor="avatar"
              className="w-full md:w-auto flex justify-center items-center group"
              onClick={() => {
                setFormFields((prev) => ({
                  ...prev,
                  avatar: "",
                }));
              }}
            >
              {formFields.avatar ? (
                <div className="w-full h-full flex justify-center items-center relative hover:brightness-90">
                  <img
                    src={
                      formFields.avatar === ""
                        ? currentUser?.avatar
                        : formFields.avatar
                    }
                    alt=""
                    className="min-w-[18rem] min-h-[18rem] max-w-[18rem] max-h-[18rem] rounded-full object-cover object-center border-[15px]"
                  />
                  <button className="absolute w-auto h-auto hidden group-hover:block cursor-pointer">
                    <FaTrashAlt
                      size={40}
                      className=" text-slate-600 hover:text-slate-500"
                    />
                  </button>
                </div>
              ) : (
                <div className="min-w-[18rem] min-h-[18rem] max-w-[18rem] max-h-[18rem] bg-blue-400 rounded-full object-cover object-center border-[15px] flex justify-center items-center text-white text-8xl font-bold">
                  {formFields.firstName?.slice(0, 1) +
                    "" +
                    formFields.lastName?.slice(0, 1)}
                </div>
              )}
            </label>
            <div className="w-full flex flex-col gap-5 justify-start items-start">
              <div className="w-full flex gap-5">
                <label
                  htmlFor="firstName"
                  className="w-full flex flex-col gap-2"
                >
                  First name:
                  <input
                    type="text"
                    className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
                    name="firstName"
                    id="firstName"
                    value={formFields.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label
                  htmlFor="lastName"
                  className="w-full flex flex-col gap-2"
                >
                  Last name:
                  <input
                    type="text"
                    className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
                    name="lastName"
                    id="lastName"
                    value={formFields.lastName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <label htmlFor="birthDate" className="w-full flex flex-col gap-2">
                Birth date:
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
                  value={formFields.birthDate}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="avatar" className="w-full flex flex-col gap-2">
                Avatar url:
                <input
                  type="url"
                  name="avatar"
                  id="avatar"
                  className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
                  value={formFields.avatar}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <CTAButton
            text="Save"
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
