import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }
  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
        />
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            required
            className="popup__input popup__input_edit_name"
            id="edit-name"
          />
          <span className="popup__input-error" id="edit-name-error"></span>
          <input
            type="text"
            name="about"
            minLength="2"
            maxLength="200"
            required
            className="popup__input popup__input_edit_about"
            id="edit-about"
          />
          <span className="popup__input-error" id="edit-about-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="popup__input-error" id="add-title-error"></span>
          <input
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_add-link"
            id="add-link"
          />
          <span className="popup__input-error" id="add-link-error"></span>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="delete" />
        <PopupWithForm
          title="Обновить аватар"
          name="editAvatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link"
            placeholder="Ссылка на новый аватар"
            required
            className="popup__input popup__input_editAvatar-link"
            id="editAvatar-link"
          />
          <span
            className="popup__input-error"
            id="editAvatar-link-error"
          ></span>
        </PopupWithForm>
        <ImagePopup />
        <Footer />
      </div>

      <template className="elements-template">
        <article className="elements__card">
          <img src="#" alt="" className="elements__image" />
          <div className="elements__group">
            <p className="elements__title"></p>
            <div className="elements__likes-container">
              <button type="button" className="elements__like"></button>
              <p className="elements__likes-count"></p>
            </div>
            <button
              type="button"
              aria-label="delete"
              className="elements__delete-button"
            >
              <img
                src="./images/bin1.svg"
                alt="Удалить"
                className="elements__delete-top"
              />
              <img
                src="./images/bin2.svg"
                alt="Удалить"
                className="elements__delete-bottom"
              />
            </button>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
