import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";

type ArticleTextProps = {
  text: string | undefined;
};

export default function ArticleText({ text }: ArticleTextProps) {
  return (
    <div className="text-secondary-text leading-7">
      {HTMLReactParser(text || "")}
    </div>
  );
}
