import editButton from "./../images/edit-button.svg";
import api from "../utils/Api.js";
import React from "react";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
          <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
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
            <h1 className="profile__name">{userName}</h1>
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
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
