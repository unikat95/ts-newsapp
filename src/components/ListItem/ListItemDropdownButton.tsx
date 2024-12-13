import React from "react";

import { BsThreeDotsVertical } from "react-icons/bs";

type ListItemDropdownButtonProps = {
  handleToggleOpen: () => void;
};

export default function ListItemDropdownButton({
  handleToggleOpen,
}: ListItemDropdownButtonProps) {
  return (
    <button
      className="w-7 h-7 hover:bg-zinc-200 flex justify-center items-center rounded-full"
      onClick={handleToggleOpen}
    >
      <BsThreeDotsVertical size={14} />
    </button>
  );
}
