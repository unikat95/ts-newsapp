import React from "react";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type ListLoaderProps = {
  size: number;
  color: string;
};

export default function ListLoader({ size, color }: ListLoaderProps) {
  return (
    <div className="w-full h-auto flex justify-center items-center p-5">
      <LoadingSpinner size={size} color={color} />
    </div>
  );
}
