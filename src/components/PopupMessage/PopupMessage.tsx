import React, { SetStateAction, useEffect } from "react";

import { IoInformationCircleOutline } from "react-icons/io5";

type PopupMessageProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  text: string;
};

export default function PopupMessage({
  isOpen,
  setIsOpen,
  text,
}: PopupMessageProps) {
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 1750);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div className="w-full fixed top-5 left-0 z-[99] flex justify-center items-center pointer-events-none">
      <div
        className={`
        rounded-md flex justify-center items-center overflow-hidden transition-transform duration-500
        ${isOpen ? "translate-y-0" : "-translate-y-32"}`}
      >
        <IoInformationCircleOutline className="w-auto flex justify-center items-center bg-blue-500 text-blue-200 text-5xl py-2 px-3" />
        <p className="w-full bg-blue-400 text-blue-50 px-5 py-3">{text}</p>
      </div>
    </div>
  );
}
