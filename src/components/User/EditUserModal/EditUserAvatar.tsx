import React, { SetStateAction } from "react";

import useMainContext from "../../../hooks/useMainContext";
import { FaTrashAlt } from "react-icons/fa";

type EditUserAvatarProps = {
  formField: string | undefined;
  formFieldFirstSlice: string | undefined;
  formFieldLastSlice: string | undefined;
  setFormFields: React.Dispatch<
    SetStateAction<{
      firstName: string | undefined;
      lastName: string | undefined;
      birthDate: string | undefined;
      avatar: string | undefined;
      about: string | undefined;
    }>
  >;
};

export default function EditUserAvatar({
  formField,
  formFieldFirstSlice,
  formFieldLastSlice,
  setFormFields,
}: EditUserAvatarProps) {
  const { currentUser } = useMainContext();
  return (
    <label
      htmlFor="avatar"
      className="w-full md:w-auto flex justify-center items-center group"
    >
      {formField ? (
        <div className="w-full h-full flex justify-center items-center relative hover:brightness-90">
          <img
            src={formField === "" ? currentUser?.avatar : formField}
            alt=""
            className="min-w-[12rem] min-h-[12rem] max-w-[12rem] max-h-[12rem] md:min-w-[16rem] md:min-h-[16rem] md:max-w-[16rem] md:max-h-[16rem] rounded-full object-cover object-center border-[15px]"
          />
          <button className="absolute w-auto h-auto hidden group-hover:block cursor-pointer">
            <FaTrashAlt
              size={40}
              className=" text-slate-600 hover:text-slate-500"
              onClick={() => {
                setFormFields((prev) => ({
                  ...prev,
                  avatar: "",
                }));
              }}
            />
          </button>
        </div>
      ) : (
        <div className="min-w-[18rem] min-h-[18rem] max-w-[18rem] max-h-[18rem] bg-blue-400 rounded-full object-cover object-center border-[15px] flex justify-center items-center text-white text-8xl font-bold">
          {formFieldFirstSlice?.slice(0, 1) +
            "" +
            formFieldLastSlice?.slice(0, 1)}
        </div>
      )}
    </label>
  );
}
