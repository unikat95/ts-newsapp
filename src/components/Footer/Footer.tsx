import React, { SetStateAction, useEffect, useRef } from "react";

type FooterProps = {
  footerHeight: number;
  setFooterHeight: React.Dispatch<SetStateAction<number>>;
};

export default function Footer({ footerHeight, setFooterHeight }: FooterProps) {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.offsetHeight;
      setFooterHeight(height);
    }

    const handleResize = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [footerHeight]);

  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center bg-zinc-900 text-white text-sm relative bottom-0 mt-20"
      ref={footerRef}
    >
      <div className="w-full max-w-[1400px] h-full flex justify-start items-start py-14 px-5 xl:px-0 gap-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-20 lg:gap-10">
          <div className="w-full grid grid-cols-[auto,_1fr] gap-10 md:gap-20">
            <p></p>
          </div>
          <p></p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-zinc-950 py-3">
        <div>&copy; Copyright 2024 NewsApp. All Rights Reserved</div>
      </div>
    </div>
  );
}
