import React from "react";
import api from "../utils/api.js";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import AddPlacePopup from "../components/AddPlacePopup.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  // Монтирование эффекта через Promise.all
  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // Функция лайк-дизлайк
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.putLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        alert(err);
      });
    } else {
      api.deleteLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        alert(err);
      });
    }
  }

  // Функция удаления карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCardsArr = cards.filter((c) => c._id !== card._id);
      setCards(newCardsArr);
    })
    .catch((err) => {
      alert(err);
    });
  }

  // Функции открытия popup форм
  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }
  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  // Функция открытия popup окна зума карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // Функция закрытия popup форм
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  // Функция апдейта данных пользователя
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

  // Функция апдейта аватарки пользователя
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

  // Функция добавления новой карточки
  function handleAddPlaceSubmit(cardData) {
    api
      .postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
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
