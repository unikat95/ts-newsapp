import React from "react";

import { IconType } from "react-icons";
import { getButtonStyles } from "../../Utilities/ThemeUtils";

type CTAButtonProps = {
  handleSubmit?: (e: { preventDefault: () => void }) => void;
  onClick?: () => void;
  Icon?: IconType;
  text: string;
  disabled?: boolean;
  variant: "light" | "dark" | "blue" | "red";
};

export default function CTAButton({
  handleSubmit,
  onClick,
  Icon,
  text,
  disabled,
  variant,
}: CTAButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md flex justify-center items-center gap-2 disabled:cursor-not-allowed disabled:bg-opacity-60
      ${getButtonStyles(variant)}`}
      disabled={disabled}
      onClick={handleSubmit || onClick}
      type="button"
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
}
