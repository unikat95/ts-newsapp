import React from "react";
import useMainContext from "../../hooks/useMainContext";

export default function APNavbar() {
  const { currentUser } = useMainContext();
  return (
    <div className="w-full h-auto bg-zinc-800 px-5 py-5 text-white flex flex-col justify-center items-end">
      <div className="flex justify-center items-center gap-3">
        <div>{currentUser?.firstName + " " + currentUser?.lastName}</div>
        <div className="w-10 h-10 bg-zinc-600 rounded-full flex justify-center items-center">
          {currentUser?.firstName.slice(0, 1)}
          {currentUser?.lastName.slice(0, 1)}
        </div>
      </div>
    </div>
  );
}
