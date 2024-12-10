import React from "react";
import { PuffLoader } from "react-spinners";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function AdminPanelLoading() {
  return (
    <>
      <LoadingBar />
      <div className="w-full h-[100dvh] bg-white flex justify-center items-center text-slate-500 text-5xl">
        <PuffLoader color="#5ac3f8" />
      </div>
    </>
  );
}