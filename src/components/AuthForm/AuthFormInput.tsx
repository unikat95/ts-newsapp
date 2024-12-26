import React, { ChangeEvent } from "react";

type AuthFormInputProps = {
  type: string;
  placeholder: string;
  formField: string;
  error: string | null;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthFormInput({
  type,
  placeholder,
  formField,
  error,
  handleInputChange,
}: AuthFormInputProps) {
  const inputClassName = `
  w-full border-l-4 px-2 py-3 rounded-sm autofill:bg-neutral-100
  outline-none
  ${error ? "bg-red-100 border-red-500" : "bg-neutral-100 border-blue-500"}
`;

  return (
    <input
      type={type}
      name={type}
      placeholder={placeholder}
      className={inputClassName}
      value={formField}
      onChange={handleInputChange}
    />
  );
}
