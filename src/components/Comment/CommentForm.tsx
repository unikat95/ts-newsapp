import React, { ChangeEvent } from "react";

import CTAButton from "../CTAButton/CTAButton";

type CommentFormProps = {
  text: string;
  msg: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: { preventDefault: () => void }) => Promise<void>;
};

export default function CommentForm({
  text,
  msg,
  handleInputChange,
  handleSubmit,
}: CommentFormProps) {
  return (
    <div className="w-full bg-white h-auto flex flex-col justify-center items-start rounded-xl shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] p-5 gap-5">
      <div>{text}</div>
      <div className="w-full">
        <textarea
          name="comment"
          id="comment"
          placeholder="comment..."
          cols={30}
          rows={4}
          className="w-full h-auto bg-white resize-none p-3 border focus:border-blue-500 focus:outline-blue-500 rounded-md"
          value={msg}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="w-full flex justify-end items-end">
        <CTAButton
          text="Add comment"
          variant="blue"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
