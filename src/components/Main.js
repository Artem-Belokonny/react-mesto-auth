import editButton from "./../images/edit-button.svg";
import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";
import Header from "../components/Header.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  handleSignOut,
  userData
}) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <Header textBtn="Выйти" userData={userData} handleSignOut={handleSignOut}/>
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
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
    </>
  );
}

export default Main;
