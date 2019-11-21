import React from "react";
import { useForm } from "../hooks/useForm";
import { strings } from "../constants/Messages";
import { generateID } from "../Utils/Utils";
import "./EditForm.css";

export default function EditForm(props) {
  const { onSubmit, data = {}, isEdit } = props;
  const [values, handleChanges] = useForm({ ...data });

  const { title, description, author } = values;

  const handleSubmit = () => {
    let bookValues = values;
    if (!isEdit) {
      // then this is creating a new book i.e on Add
      bookValues = {
        ...values,
        id: generateID()
      };
    }
    onSubmit(bookValues, isEdit);
  };

  let buttonTitle = strings.add;
  if (isEdit) {
    buttonTitle = strings.update;
  }

  return (
    <div className="form-container">
      <div className="form-mainTitle">{strings.formTitle}</div>

      <input
        type="text"
        value={title}
        className="inputField"
        onChange={handleChanges}
        placeholder={strings.enterTitle}
        name="title"
      />
      <input
        type="text"
        value={description}
        className="inputField"
        onChange={handleChanges}
        placeholder={strings.enterDescription}
        name="description"
      />
      <input
        type="text"
        value={author}
        className="inputField"
        onChange={handleChanges}
        placeholder={strings.enterAuthor}
        name="author"
      />
      <div onClick={handleSubmit} className="button add">
        <span className="button_title">{buttonTitle}</span>
      </div>
    </div>
  );
}
