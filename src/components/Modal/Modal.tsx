import React, { SetStateAction } from "react";

import { IoIosClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  closeIcon?: boolean;
  setCloseModal?: React.Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  children,
  isOpen,
  closeIcon,
  setCloseModal,
}: ModalProps) {
  const handleCloseModal = () => {
    setCloseModal?.(false);
  };

  return (
    <>
      {isOpen && (
        <div className="w-screen h-[100dvh] bg-black bg-opacity-30 fixed top-0 left-0 flex justify-center items-center z-[999] md:px-10">
          <div className="w-auto h-auto bg-white md:rounded-xl relative overflow-hidden">
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
