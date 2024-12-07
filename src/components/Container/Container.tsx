import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  navbarHeight: number;
};

export default function Container({ children, navbarHeight }: ContainerProps) {
  return (
    <div
      className="w-full flex flex-col justify-start items-start mt-[3.75rem]"
      style={{ marginTop: navbarHeight }}
    >
      {children}
    </div>
  );
}
