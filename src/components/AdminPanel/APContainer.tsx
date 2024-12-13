import React from "react";

type APContainerProps = {
  children: React.ReactNode;
};

export default function APContainer({ children }: APContainerProps) {
  return (
    <div className="w-full h-[100dvh] flex flex-col gap-5">{children}</div>
  );
}
