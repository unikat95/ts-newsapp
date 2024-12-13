import React from "react";

import { IoIosClose } from "react-icons/io";
import useMainContext from "../../hooks/useMainContext";

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  closeIcon?: boolean;
};

export default function Modal({ children, isOpen, closeIcon }: ModalProps) {
  const { setIsEditModalOpen } = useMainContext();

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="w-screen h-[100dvh] bg-black bg-opacity-30 fixed top-0 left-0 flex justify-center items-center z-[999]">
          <div className="w-auto h-auto bg-white md:rounded-xl relative">
            {children}
            {closeIcon && (
              <button
                className="absolute top-5 right-5 clear-none hover:bg-slate-900 hover:text-white rounded-full"
                onClick={handleCloseModal}
              >
                <IoIosClose size={24} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
