import React, { ChangeEvent } from "react";

type EditUserInputProps = {
  name: string;
  text: string;
  formField: string | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EditUserInput({
  name,
  text,
  formField,
  handleInputChange,
}: EditUserInputProps) {
  return (
    <label htmlFor={name} className="w-full flex flex-col gap-2">
      {text}
      <input
        type="text"
        name={name}
        id={name}
        value={formField}
        onChange={handleInputChange}
        className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
      />
    </label>
  );
}
