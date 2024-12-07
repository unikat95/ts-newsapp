import React, { ChangeEvent } from "react";

type AuthFormInputProps = {
  type: string;
  placeholder: string;
  formField: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthFormInput({
  type,
  placeholder,
  formField,
  handleInputChange,
}: AuthFormInputProps) {
  return (
    <input
      type={type}
      name={type}
      placeholder={placeholder}
      className="w-full border-l-[3px] focus:border-blue-500 outline-none px-2 py-3 rounded-sm"
      value={formField}
      onChange={handleInputChange}
    />
  );
}
