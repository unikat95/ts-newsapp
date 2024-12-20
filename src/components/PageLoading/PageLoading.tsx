import React from "react";

import { PuffLoader } from "react-spinners";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function PageLoading() {
  return (
    <>
      <LoadingBar />
      <div className="w-screen h-[100dvh] fixed top-0 left-0 flex justify-center items-center bg-white text-slate-500 text-5xl">
        <PuffLoader color="#5ac3f8" />
      </div>
    </>
  );
}
