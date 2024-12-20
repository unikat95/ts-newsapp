import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useMainContext from "../../hooks/useMainContext";
import { UserProps } from "../../context/MainContextTypes";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { IoIosClose } from "react-icons/io";
import CTAButton from "../CTAButton/CTAButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function SendMessage() {
  const { currentUser, userList } = useMainContext();
  const [formFields, setFormFields] = useState({
    userId: "",
    user: "",
    title: "",
    message: "",
  });
  const [openUserList, setOpenUserList] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

  useEffect(() => {
    if (!formFields.user) {
      setOpenUserList(false);
    }
  }, [formFields.user]);

  const filteredUserList = userList?.filter(
    (user) =>
      (user.firstName.toLowerCase().includes(formFields.user) ||
        user.lastName.toLowerCase().includes(formFields.user)) &&
      user.id !== currentUser?.id
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
    setOpenUserList(true);
  };

  const handleSelectUser = (user: string) => {
    const selectedUser = userList?.find((u) => u.id === user);
    if (selectedUser?.id === currentUser?.id) return;
    setFormFields((prev) => ({ ...prev, userId: user }));

    if (selectedUser) {
      setSelectedUser(selectedUser);
    }
    setOpenUserList(false);
  };

  const handleClearUser = () => {
    setSelectedUser(null);
    setFormFields((prev) => ({ ...prev, userId: "" }));
  };

  const handleSubmit = async () => {
    if (!formFields.userId || !formFields.title || !formFields.message) return;
    try {
      const messageId = uuidv4();
      const messageData = {
        id: messageId,
        from: currentUser?.id!,
        to: formFields.userId,
        title: formFields.title,
        message: formFields.message,
        sentAt: new Date().toISOString(),
        readBy: {
          [currentUser?.id!]: true,
          [formFields.userId]: false,
        },
        replies: [],
      };

      await setDoc(doc(db, "messages", messageId), messageData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormFields((prev) => ({
        ...prev,
        message: "",
        title: "",
        user: "",
        userId: "",
      }));

      handleClearUser();
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-[0_1px_30px_0_rgba(0,0,0,0.05)]">
      <form className="w-full flex flex-col justify-start items-end gap-2 p-5 rounded-lg">
        {selectedUser ? (
          <div className="w-full bg-slate-100 px-3 py-2 border flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <UserAvatar size="2xs" user={selectedUser} />
              {selectedUser.firstName + " " + selectedUser.lastName}
            </div>
            <button
              type="button"
              className="font-mono bg-slate-500 hover:bg-slate-900 text-white rounded-full size-5 flex justify-center items-center"
              onClick={handleClearUser}
            >
              <IoIosClose size={20} />
            </button>
          </div>
        ) : (
          <div className="w-full relative">
            <input
              type="text"
              name="user"
              placeholder="start typing to search for a user"
              className="w-full px-3 py-2 border outline-1 outline-blue-500"
              onChange={handleInputChange}
            />
            {openUserList && (
              <div className="w-full bg-white border flex flex-col justify-center items-start absolute p-3">
                <div className="w-full flex flex-col items-start gap-1">
                  {filteredUserList?.map((user) => (
                    <button
                      type="button"
                      key={user.id}
                      onClick={() => handleSelectUser(user.id)}
                      className="w-full border rounded-md flex justify-start items-center px-3 py-2 gap-2"
                    >
                      <UserAvatar size="2xs" user={user} />{" "}
                      {user.firstName + " " + user.lastName}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        <input
          type="text"
          name="title"
          placeholder="message title..."
          className="w-full px-3 py-2 border outline-1 outline-blue-500"
          value={formFields.title}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="message..."
          cols={30}
          rows={10}
          className="w-full px-3 py-2 border outline-1 outline-blue-500"
          value={formFields.message}
          onChange={handleInputChange}
        />
        <CTAButton
          text="Send message"
          variant="blue"
          disabled={
            !formFields.userId || !formFields.title || !formFields.message
          }
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
