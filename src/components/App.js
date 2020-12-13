import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import api from "../utils/Api.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    Promise.all([api.getUserData()])
      .then(([userData]) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
  function handleUpdateUser(userData) {
    api
      .patchUserData(userData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        alert(err);
      });
    closeAllPopups();
  }

  function handleUpdateAvatar(userAvatar) {
    api
      .patchUserAvatar(userAvatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        alert(err);
      });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          title="Новое место"
          name="add"
          textBtn="Сохранить"
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
        <PopupWithForm title="Вы уверены?" name="delete" textBtn="Да" />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
