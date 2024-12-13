import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function FormLoader() {
  return (
    <div className="w-full h-full bg-white bg-opacity-70 flex justify-center items-center absolute top-0 left-0">
      <div className="text-xl text-neutral-500">
        <LoadingSpinner size={25} />
      </div>
    </div>
  );
}
