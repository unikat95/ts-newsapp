import React, { ChangeEvent } from "react";

type EditUserDatePickerProps = {
  formField: string | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EditUserDatePicker({
  formField,
  handleInputChange,
}: EditUserDatePickerProps) {
  return (
    <label htmlFor="birthDate" className="w-full flex flex-col gap-2">
      Birth date:
      <input
        type="date"
        name="birthDate"
        id="birthDate"
        className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
        value={formField}
        onChange={handleInputChange}
      />
    </label>
  );
}
