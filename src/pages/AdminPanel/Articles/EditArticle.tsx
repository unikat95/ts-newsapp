import React, { ChangeEvent, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMainContext from "../../../hooks/useMainContext";
import AdminPanelHeader from "../../../components/AdminPanel/AdminPanelHeader";
import CreateArticleInput from "../../../components/CreateArticle/CreateArticleInput";
import JoditEditor from "jodit-react";
import { db } from "../../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { PuffLoader } from "react-spinners";
import useLoading from "../../../hooks/useLoading";
import AdminPanelLoading from "../../../components/AdminPanel/AdminPanelLoading";

export default function EditArticle() {
  const { id } = useParams();
  const { articles } = useMainContext();

  const currentArticle = articles.find((art) => art.id === id);
  const [formField, setFormField] = useState({
    title: currentArticle?.title || "",
    img: currentArticle?.img || "",
    text: currentArticle?.text || "",
  });
  const [isEditing, setIsEditing] = useState(false);
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(true);

    if (editedArticleRef) {
      try {
        await updateDoc(editedArticleRef, {
          title: formField.title,
          img: formField.img,
          text: formField.text,
        });
        await new Promise((res) => setTimeout(res, 1000));
      } catch (error) {
        console.log(error);
      }
    }
    setIsEditing(false);
    navigate("/admin-panel/article-list");
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

  if (loading) return <AdminPanelLoading />;

  return (
    <div className="w-full h-[100dvh] p-5 flex flex-col gap-5">
      <form className="w-full h-full bg-white flex flex-col justify-start items-end gap-5 p-5 rounded-xl relative">
        <AdminPanelHeader text="Edit article" />
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
        <button
          className="bg-black text-white px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={handleSubmit}
          disabled={!formField.title || !formField.img || !formField.text}
        >
          Save changes
        </button>
        {isEditing && (
          <div className="w-full h-full bg-white bg-opacity-40 flex justify-center items-center absolute top-0 left-0">
            <PuffLoader color="#5ac3f8" />
          </div>
        )}
      </form>
    </div>
  );
}
