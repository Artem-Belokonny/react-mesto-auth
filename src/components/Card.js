import deleteButtonTop from "./../images/bin1.svg";
import deleteButtonBottom from "./../images/bin2.svg";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
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
          <button type="button" className="elements__like"></button>
          <p className="elements__likes-count">{card.likes.length}</p>
        </div>
        <button
          type="button"
          aria-label="delete"
          className="elements__delete-button"
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
