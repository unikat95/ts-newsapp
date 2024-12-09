import React, { ChangeEvent, useMemo, useState } from "react";
import useMainContext from "../../../hooks/useMainContext";
import JoditEditor from "jodit-react";

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

  const handleEditorChange = (newText: string) => {
    setFormField((prev) => ({
      ...prev,
      text: newText,
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
          className="w-full border-2 focus:border-2 focus:border-blue-500 p-3 outline-none rounded-md"
          onChange={handleInputChange}
          value={formField.title}
        />
        <input
          type="text"
          name="img"
          placeholder="image url..."
          className="w-full border-2 focus:border-2 focus:border-blue-500 p-3 outline-none rounded-md"
          onChange={handleInputChange}
          value={formField.img}
        />
        <JoditEditor
          config={useMemo(
            () => ({
              readonly: false,
              placeholder: "text...",
              minHeight: 413,
              defaultLineHeight: 1.3,
              sticky: false,
              required: true,
            }),
            []
          )}
          value={formField.text}
          onChange={handleEditorChange}
        />
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
