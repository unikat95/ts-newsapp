import React, { ChangeEvent, SetStateAction, useState } from "react";

import useMainContext from "../../hooks/useMainContext";
import CTAButton from "../CTAButton/CTAButton";
import { FaSave } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { UserProps } from "../../context/MainContextTypes";
import { PuffLoader } from "react-spinners";
import UserAvatar from "../User/UserAvatar/UserAvatar";

type EditUserProps = {
  user: UserProps | null | undefined;
  setArrayToDisplay?: React.Dispatch<SetStateAction<UserProps[] | null>>;
  setIsOpen: React.Dispatch<SetStateAction<boolean>> | undefined;
};

const userRole = [
  {
    id: 0,
    value: "administrator",
  },
  {
    id: 1,
    value: "moderator",
  },
  {
    id: 2,
    value: "user",
  },
];

export default function EditUser({
  user,
  setArrayToDisplay,
  setIsOpen,
}: EditUserProps) {
  const { setIsEditModalOpen, setEditLoading } = useMainContext();
  const [isEditing, setIsEditing] = useState(false);

  const [formFields, setFormFields] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    avatar: user?.avatar ?? "",
  });
  const [role, setRole] = useState(user?.role);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const editUserRef = user ? doc(db, "users", user.id) : null;

  const handleSaveChanges = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(true);

    if (editUserRef) {
      try {
        await new Promise((res) =>
          setTimeout(() => {
            res;
            updateDoc(editUserRef, {
              firstName: formFields.firstName,
              lastName: formFields.lastName,
              avatar: formFields.avatar,
              role: role,
            });
            setIsEditing(false);
            setIsEditModalOpen(false);
            setEditLoading(true);
          }, 700)
        );

        if (setArrayToDisplay) {
          setArrayToDisplay(
            (prev) =>
              prev?.map((u) =>
                u.id === user?.id ? { ...u, ...formFields } : u
              ) || null
          );
        }
      } catch (error) {
        console.log(error);
        setIsEditing(false);
      } finally {
        setIsEditModalOpen(false);
      }
    }
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsOpen?.(false);
  };

  return (
    <div className="w-full h-full flex flex-col p-5">
      <form className="w-full h-auto flex flex-col justify-end items-end gap-10 relative">
        <div className="w-full border rounded-md h-auto flex flex-col justify-center items-center gap-2 p-10">
          <div className="w-full h-full rounded-full overflow-hidden mb-10 flex justify-center items-center">
            <UserAvatar size="lg" user={user} />
          </div>
          <label
            htmlFor="firstName"
            className="w-full grid grid-cols-[1fr,2fr] justify-center items-center gap-5"
          >
            <p className="w-full flex justify-end items-end">First name:</p>
            <input
              type="text"
              name="firstName"
              value={formFields.firstName}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </label>
          <label
            htmlFor="firstName"
            className="w-full grid grid-cols-[1fr,2fr] justify-center items-center gap-5"
          >
            <p className="w-full flex justify-end items-end">Last name:</p>
            <input
              type="text"
              name="lastName"
              value={formFields.lastName}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </label>
          <label
            htmlFor="role"
            className="w-full grid grid-cols-[1fr,2fr] justify-center items-center gap-5"
          >
            <p className="w-full flex justify-end items-end">Role:</p>
            <select
              name="role"
              id=""
              className="w-full border px-4 py-2 rounded-md"
              onChange={handleRoleChange}
              value={role}
            >
              {userRole.map((role) => (
                <option key={role.id} value={role.value}>
                  {role.value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex gap-2">
          <CTAButton
            text="Save changes"
            Icon={FaSave}
            variant="dark"
            handleSubmit={handleSaveChanges}
          />
          <CTAButton text="Cancel" variant="red" onClick={handleCloseModal} />
        </div>
        {isEditing && (
          <div className="w-full h-full bg-white bg-opacity-40 flex justify-center items-center absolute top-0 left-0">
            <PuffLoader color="#5ac3f8" />
          </div>
        )}
      </form>
    </div>
  );
}
