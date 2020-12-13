import PopupWithForm from "../components/PopupWithForm.js";
import React from "react";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        required
        placeholder="Имя"
        className="popup__input popup__input_edit_name"
        id="edit-name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__input-error" id="edit-name-error"></span>
      <input
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
        required
        placeholder="Занятие"
        className="popup__input popup__input_edit_about"
        id="edit-about"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error" id="edit-about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
