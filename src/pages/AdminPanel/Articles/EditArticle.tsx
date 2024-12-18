import React, { ChangeEvent, useMemo, useState } from "react";

import { db } from "../../../config/firebase";
import { doc } from "firebase/firestore";

import { PuffLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

import { FaSave } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import JoditEditor from "jodit-react";
import useMainContext from "../../../hooks/useMainContext";
import CreateArticleInput from "../../../components/CreateArticle/CreateArticleInput";
import useLoading from "../../../hooks/useLoading";
import APLoading from "../../../components/AdminPanel/APLoading";
import ArticlePreview from "../../../components/Article/ArticlePreview";
import CTAButton from "../../../components/CTAButton/CTAButton";
import APHeading from "../../../components/AdminPanel/APHeading";

export default function EditArticle() {
  const { id } = useParams();
  const { articles, setShowPopup, setPopupMessage, handleEditArticle } =
    useMainContext();

  const currentArticle = articles.find((art) => art.id === id);
  const [formField, setFormField] = useState({
    title: currentArticle?.title || "",
    img: currentArticle?.img || "",
    text: currentArticle?.text || "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (newText: string) => {
    setFormField((prev) => ({ ...prev, text: newText }));
  };

  const editedArticleRef = currentArticle
    ? doc(db, "articles", currentArticle.id)
    : null;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleEditArticle({
      setIsEditing,
      editedArticleRef,
      title: formField.title,
      img: formField.img,
      text: formField.text,
      setShowPopup,
      setPopupMessage,
      navigate,
      msg: "Changes saved successfully",
    });
  };

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder: "text...",
      minHeight: 413,
      defaultLineHeight: 1.3,
      sticky: false,
      required: true,
    }),
    []
  );

  const loading = useLoading();

  if (loading) return <APLoading />;

  return (
    <div className="w-full h-[100dvh] flex flex-col gap-5">
      <form className="w-full h-full bg-white flex flex-col justify-start items-end gap-5 p-5 relative">
        <APHeading text="Edit article" />
        <div className="w-full h-full flex flex-col justify-start items-end gap-5 overflow-auto">
          <CreateArticleInput
            handleInputChange={handleInputChange}
            name="title"
            formField={formField.title}
            placeholder=""
          />
          <CreateArticleInput
            handleInputChange={handleInputChange}
            name="img"
            formField={formField.img}
            placeholder=""
          />
          <JoditEditor
            config={editorConfig}
            value={formField.text}
            onChange={handleEditorChange}
          />
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <CTAButton
            onClick={() => setOpenPreview(!openPreview)}
            text="Preview"
            Icon={FaEye}
            variant="blue"
          />
          <CTAButton
            handleSubmit={handleSubmit}
            text="Save changes"
            Icon={FaSave}
            disabled={!formField.title || !formField.img || !formField.text}
            variant="dark"
          />
        </div>
        {isEditing && (
          <div className="w-full h-full bg-white bg-opacity-40 flex justify-center items-center absolute top-0 left-0">
            <PuffLoader color="#5ac3f8" />
          </div>
        )}
      </form>
      {openPreview && (
        <ArticlePreview
          article={currentArticle}
          formField={formField}
          setOpenPreview={setOpenPreview}
        />
      )}
    </div>
  );
}
