import React from "react";

import { CgSpinner } from "react-icons/cg";

type LoadingSpinnerProps = {
  size: number;
};

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return <CgSpinner size={size} className="animate-spin text-sky-500" />;
}
