import React from "react";
import PopupWithForm from "../components/PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // Стейты имени и ссылки новой карточки
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  // Управляемые компоненты input полей формы
  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }
  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  // Обработчик сабмита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: title,
      link: link,
    });
    setTitle("");
    setLink("");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        minLength="2"
        maxLength="30"
        required
        placeholder="Название"
        className="popup__input popup__input_add-title"
        id="add-title"
        value={title}
        onChange={handleTitleChange}
      />
      <span className="popup__input-error" id="add-title-error"></span>
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        className="popup__input popup__input_add-link"
        id="add-link"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="popup__input-error" id="add-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
