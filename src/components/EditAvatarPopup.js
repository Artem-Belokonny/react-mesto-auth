import PopupWithForm from "../components/PopupWithForm.js";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  // Использование рефа
  const avatarRef = React.useRef();

  // Обработчик сабмита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="editAvatar"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="link"
        placeholder="Ссылка на новый аватар"
        required
        className="popup__input popup__input_editAvatar-link"
        id="editAvatar-link"
        ref={avatarRef}
      />
      <span className="popup__input-error" id="editAvatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
