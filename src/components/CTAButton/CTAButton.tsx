import React from "react";

type CTAButtonProps = {
  handleSubmit?: (e: { preventDefault: () => void }) => Promise<void>;

  text: string;
};

export default function CTAButton({
  handleSubmit,

  text,
}: CTAButtonProps) {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:bg-slate-400"
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
}
