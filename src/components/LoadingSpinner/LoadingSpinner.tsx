import React from "react";

import { CgSpinner } from "react-icons/cg";
import { getIconStyles } from "../../utils/ThemeUtils";

type LoadingSpinnerProps = {
  size: number;
  color?: string | undefined;
};

export default function LoadingSpinner({ size, color }: LoadingSpinnerProps) {
  return (
    <CgSpinner
      size={size}
      className={`animate-spin ${getIconStyles(color ? color : "text-white")}`}
    />
  );
}
