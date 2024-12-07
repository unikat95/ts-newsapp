import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="w-full max-w-[1400px] flex flex-col justify-center items-center py-5 px-5">
      {children}
    </div>
  );
}
