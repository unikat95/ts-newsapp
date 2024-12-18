import React from "react";

import { PuffLoader } from "react-spinners";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function PageLoading() {
  return (
    <>
      <LoadingBar />
      <div className="w-screen h-[100dvh] flex justify-center items-center bg-slate-50 text-slate-500 text-5xl">
        <PuffLoader color="#5ac3f8" />
      </div>
    </>
  );
}
