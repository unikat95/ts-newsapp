import React, { ChangeEventHandler } from "react";

type CreateArticleInputProps = {
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  formField: string | undefined;
  name: string;
  placeholder: string;
};

export default function CreateArticleInput({
  handleInputChange,
  formField,
  name,
  placeholder,
}: CreateArticleInputProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
      onChange={handleInputChange}
      value={formField}
    />
  );
}
