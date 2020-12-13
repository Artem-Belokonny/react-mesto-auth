import editButton from "./../images/edit-button.svg";
import api from "../utils/Api.js";
import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.putLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
    } else {
      api.deleteLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
    }
  }

  // function handleCardDelete() {
  //   const isOwn = card.owner._id === currentUser._id;
  //   api.deleteCard(card._id).then((newCardsArr) => {
  //   const newCardsArr = cards.map((c) => ( ... ? newCardsArr : c));
  //   setCards(newCardsArr);
  // });

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardData]) => {
        setCards(cardData);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Аватарка"
            className="profile__avatar"
          />
          <div className="profile__edit-avatar">
            <img
              src={editButton}
              alt="Редактировать"
              className="profile__edit-avatar-image"
              onClick={onEditAvatar}
            />
          </div>
        </div>
        <div className="profile__personal-info">
          <div className="profile__personal-adaptiv">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            >
              <img
                src={editButton}
                alt="Редактировать"
                className="profile__edit-button-image"
              />
            </button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
