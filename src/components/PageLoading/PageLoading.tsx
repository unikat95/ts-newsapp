import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function PageLoading() {
  return (
    <div className="w-screen h-[100dvh] flex justify-center items-center bg-slate-50 text-slate-500 text-5xl">
      <LoadingSpinner />
    </div>
  );
}
