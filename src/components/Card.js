import React from "react";
import deleteButtonTop from "./../images/bin1.svg";
import deleteButtonBottom from "./../images/bin2.svg";
import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // Тернарные выражения на отображение стилей лайка/корзины
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `elements__delete-button ${
    isOwn ? "elements__delete-button" : "elements__delete-button_hidden"
  }`;
  const isLiked = card.likes.some(user => user === currentUser._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked ? "elements__like_active" : "elements__like"
  }`;

  // Фукнции на зум, лайк-дизлайк, удаление прокинутые из компонента App
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="elements__card">
      <img
        src={card.link}
        alt={card.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__group">
        <p className="elements__title">{card.name}</p>
        <div className="elements__likes-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="elements__likes-count">{card.likes.length}</p>
        </div>
        <button
          type="button"
          aria-label="delete"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        >
          <img
            src={deleteButtonTop}
            alt="Удалить"
            className="elements__delete-top"
          />
          <img
            src={deleteButtonBottom}
            alt="Удалить"
            className="elements__delete-bottom"
          />
        </button>
      </div>
    </article>
  );
}

export default Card;