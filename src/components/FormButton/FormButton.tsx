import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type FormButtonProps = {
  onClick: (e: { preventDefault: () => void }) => void;
  text: string;
  loading?: boolean;
};

export default function FormButton({
  onClick,
  text,
  loading,
}: FormButtonProps) {
  return (
    <button
      type="button"
      className="w-full bg-black text-white px-3 py-2 rounded-md flex justify-center items-center gap-2"
      onClick={onClick}
    >
      {text}
      {loading && <LoadingSpinner />}
    </button>
  );
}
