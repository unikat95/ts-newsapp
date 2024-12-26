import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      {children}
    </div>
  );
}
