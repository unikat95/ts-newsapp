import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";

type ArticleTextProps = {
  text: string;
};

export default function ArticleText({ text }: ArticleTextProps) {
  return <div className="text-zinc-800">{HTMLReactParser(text)}</div>;
}
