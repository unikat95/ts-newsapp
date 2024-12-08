import React, { ChangeEvent, useState } from "react";
import useMainContext from "../../../hooks/useMainContext";

export default function CreateArticle() {
  const [formField, setFormField] = useState({
    title: "",
    img: "",
    text: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { CreateArticle, currentUser } = useMainContext();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    CreateArticle({
      title: formField.title,
      img: formField.img,
      text: formField.text,
      currentUser,
    });

    setFormField((prev) => ({
      ...prev,
      title: "",
      img: "",
      text: "",
    }));
  };

  return (
    <div>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          placeholder="enter tritle..."
          className="w-full border focus:border-blue-500 p-3 outline-none"
          onChange={handleInputChange}
          value={formField.title}
        />
        <input
          type="text"
          name="img"
          placeholder="image url..."
          className="w-full border focus:border-blue-500 p-3 outline-none"
          onChange={handleInputChange}
          value={formField.img}
        />
        <textarea
          name="text"
          cols={30}
          rows={10}
          placeholder="enter text..."
          className="w-full border focus:border-blue-500 p-3 outline-none"
          onChange={handleInputChange}
          value={formField.text}
        ></textarea>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Create article
        </button>
      </form>
    </div>
  );
}
