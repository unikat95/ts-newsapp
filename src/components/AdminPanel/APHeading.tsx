import React from "react";

type APHeaderProps = {
  text: string;
};

export default function APHeading({ text }: APHeaderProps) {
  return (
    <h1 className="w-full text-2xl text-slate-700 font-medium flex justify-start items-start">
      {text}
    </h1>
  );
}
