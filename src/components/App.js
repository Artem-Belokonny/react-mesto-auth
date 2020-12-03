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
  const [selectedCard, setSelectedCard] = React.useState("");

  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }
  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard("");
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
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
            placeholder="Имя"
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
            placeholder="Занятие"
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
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </>
  );
}

export default App;
