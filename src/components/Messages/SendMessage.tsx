import React, { ChangeEvent, useEffect, useState } from "react";

import useMainContext from "../../hooks/useMainContext";
import { UserProps } from "../../context/MainContextTypes";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { IoIosClose } from "react-icons/io";
import FormLoader from "../FormLoader/FormLoader";
import APHeading from "../AdminPanel/APHeading";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Button from "../ui/Button/Button";

export default function SendMessage() {
  const {
    currentUser,
    userList,
    handleSendMessage,
    setPopupMessage,
    setShowPopup,
  } = useMainContext();
  const [formFields, setFormFields] = useState({
    userId: "",
    user: "",
    title: "",
    message: "",
  });
  const [openUserList, setOpenUserList] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!formFields.user) {
      setOpenUserList(false);
    }
  }, [formFields.user]);

  const filteredUserList = userList?.filter((user) => {
    const searchTerms = formFields.user.toLowerCase().trim().split(" ");

    const fieldsToSearch = [
      user.firstName.toLowerCase(),
      user.lastName.toLowerCase(),
      `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`,
    ];

    return (
      searchTerms.every((term) =>
        fieldsToSearch.some((field) => field.includes(term))
      ) && user.id !== currentUser?.id
    );
  });

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

  const handleSubmit = () => {
    setLoading(true);
    handleSendMessage({
      currentUser,
      userId: formFields.userId,
      title: formFields.title,
      message: formFields.message,
      setFormFields,
      handleClearUser,
      setLoading,
      setShowPopup,
      setPopupMessage,
      msg: "Message successfully sent",
      navigate,
    });
  };

  const loader = useLoading();
  if (loader)
    return (
      <div className="w-full h-auto flex justify-center items-center p-5">
        <LoadingSpinner size={25} />
      </div>
    );

  return (
    <div className="w-full flex flex-col bg-white rounded-lg shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] relative p-5 gap-5">
      <APHeading text="Send message" />
      <form className="w-full flex flex-col justify-start items-end gap-2 rounded-lg">
        {selectedUser ? (
          <div className="w-full bg-slate-100 px-3 py-2 border flex justify-between items-center rounded-md">
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
          <div className="w-full flex flex-col justify-start items-start relative">
            <input
              type="text"
              name="user"
              placeholder="start typing to search for a user"
              className="w-full px-3 py-2 border outline-1 outline-blue-500 rounded-md"
              onChange={handleInputChange}
            />
            {openUserList && filteredUserList && (
              <div className="w-full bg-white border rounded-xl shadow-[0_1px_30px_0_rgba(0,0,0,0.05)]  flex flex-col justify-start items-start absolute p-5 top-12">
                <div className="w-full flex flex-col items-start gap-1">
                  {filteredUserList?.length > 0
                    ? filteredUserList?.map((user) => (
                        <button
                          type="button"
                          key={user.id}
                          onClick={() => handleSelectUser(user.id)}
                          className="w-full bg-white hover:bg-slate-100 border rounded-md flex justify-start items-center px-3 py-2 gap-2"
                        >
                          <UserAvatar size="2xs" user={user} />{" "}
                          {user.firstName + " " + user.lastName}
                        </button>
                      ))
                    : "User not found."}
                </div>
              </div>
            )}
          </div>
        )}
        <input
          type="text"
          name="title"
          placeholder="message title..."
          className="w-full px-3 py-2 border outline-1 outline-blue-500 rounded-md"
          value={formFields.title}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="message..."
          cols={30}
          rows={10}
          className="w-full px-3 py-2 border outline-1 outline-blue-500 rounded-md"
          value={formFields.message}
          onChange={handleInputChange}
        />
        <Button
          variant="blue"
          onClick={handleSubmit}
          disabled={
            !formFields.userId || !formFields.title || !formFields.message
          }
          text="Send message"
        />
      </form>
      {loading && <FormLoader />}
    </div>
  );
}
