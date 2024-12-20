import React, { SetStateAction } from "react";

import { UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";

import { RiExternalLinkFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import useMainContext from "../../hooks/useMainContext";
import Modal from "../Modal/Modal";
import EditUser from "../EditUser/EditUser";

export type APUserDropdownProps = {
  to: string;
  handleToggleOpen?: () => void;
  user?: UserProps | null;
  onDelete?: (articleId: string) => void;
  link: string;
  setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
  setArrayToDisplay: React.Dispatch<SetStateAction<UserProps[] | null>>;
};

export default function APUserDropdown({
  to,
  handleToggleOpen,
  user,
  link,
  setArrayToDisplay,
  setIsOpen,
}: APUserDropdownProps) {
  const { setIsEditModalOpen, isEditModalOpen } = useMainContext();

  const handleOpenModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="bg-white absolute right-5 top-10 shadow-md border z-[999] rounded-lg">
        <ul className="w-full text-sm flex flex-col justify-start items-start p-2 gap-1">
          <li className="w-full rounded-md overflow-hidden">
            <Link
              to={`${link}${to}`}
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleToggleOpen}
            >
              <RiExternalLinkFill size={17} />
              Go to profile
            </Link>
          </li>
          <li className="w-full rounded-md overflow-hidden">
            <button
              className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 py-2"
              onClick={handleOpenModal}
            >
              <FaRegEdit size={17} />
              Edit user
            </button>
          </li>
        </ul>
      </div>

      <Modal isOpen={isEditModalOpen}>
        <EditUser
          user={user}
          setArrayToDisplay={setArrayToDisplay}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  );
}
