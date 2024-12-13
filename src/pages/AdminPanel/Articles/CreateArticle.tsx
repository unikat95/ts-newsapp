import React, { ChangeEvent, useMemo, useState } from "react";

import { IoMdCreate } from "react-icons/io";

import JoditEditor from "jodit-react";
import useMainContext from "../../../hooks/useMainContext";
import useLoading from "../../../hooks/useLoading";
import ArticleCategories from "../../../components/ArticleCategories/ArticleCategories";
import CreateArticleInput from "../../../components/CreateArticle/CreateArticleInput";
import APLoading from "../../../components/AdminPanel/APLoading";
import CTAButton from "../../../components/CTAButton/CTAButton";
import CreateArticleLoader from "../../../components/CreateArticle/CreateArticleLoader";
import APHeading from "../../../components/AdminPanel/APHeading";

export default function CreateArticle() {
  const [formField, setFormField] = useState({
    title: "",
    img: "",
    text: "",
  });
  const { CreateArticle, currentUser, category, setCategory } =
    useMainContext();
  const [isCreating, setIsCreating] = useState(false);
  const loading = useLoading();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (newText: string) => {
    setFormField((prev) => ({ ...prev, text: newText }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsCreating(true);
    if (!formField.title || !formField.img || !formField.text) return;

    await new Promise((res) => setTimeout(res, 500));

    await CreateArticle({
      title: formField.title,
      img: formField.img,
      text: formField.text,
      currentUser,
      category,
    });

    setFormField({ title: "", img: "", text: "" });
    setCategory("");
    setIsCreating(false);
  };

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder: "text...",
      minHeight: 520,
      defaultLineHeight: 1.3,
      sticky: false,
      required: true,
    }),
    []
  );

  if (loading) return <APLoading />;

  return (
    <div className="w-full h-[100dvh] flex flex-col gap-5">
      <form className="w-full h-full bg-white flex flex-col justify-start items-end gap-5 p-5 relative">
        <APHeading text="Create article" />
        <div className="w-full h-full flex flex-col gap-5 overflow-auto">
          <CreateArticleInput
            handleInputChange={handleInputChange}
            name="title"
            formField={formField.title}
            placeholder="enter title..."
          />
          <CreateArticleInput
            handleInputChange={handleInputChange}
            name="img"
            formField={formField.img}
            placeholder="image url..."
          />
          <ArticleCategories />
          <JoditEditor
            config={editorConfig}
            value={formField.text}
            onChange={handleEditorChange}
          />
        </div>
        <CTAButton
          handleSubmit={handleSubmit}
          text="Create article"
          Icon={IoMdCreate}
          disabled={
            !formField.title || !formField.img || !formField.text || !category
          }
          variant="dark"
        />
        {isCreating && <CreateArticleLoader />}
      </form>
    </div>
  );
}
