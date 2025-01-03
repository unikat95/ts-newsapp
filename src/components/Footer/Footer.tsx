import React, { SetStateAction, useEffect, useRef } from "react";

import FooterQuiclLinks from "./FooterQuiclLinks";
import FooterLatestArticles from "./FooterLatestArticles";
import FooterSocialMedia from "./FooterSocialMedia";
import { NavLink } from "react-router-dom";

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
      <div className="w-full max-w-[1300px] h-full flex justify-start items-start py-14 px-5 xl:px-0 gap-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-20 lg:gap-10">
          <div className="w-full grid grid-cols-[auto,_1fr] gap-10 md:gap-20">
            <FooterQuiclLinks />
            <FooterLatestArticles />
          </div>
          <FooterSocialMedia />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-zinc-950 py-5">
        <div>
          &copy; Copyright 2024{" "}
          <NavLink
            to="/"
            className="font-semibold text-orange-400"
            onClick={() => window.scrollTo(0, 0)}
          >
            NewsApp
          </NavLink>
          . All Rights Reserved
        </div>
      </div>
    </div>
  );
}
