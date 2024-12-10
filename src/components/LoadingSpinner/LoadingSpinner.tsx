import React from "react";

import { PiSpinnerBold } from "react-icons/pi";

type LoadingSpinnerProps = {
  size: number;
};

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return <PiSpinnerBold size={size} className="animate-spin" />;
}
