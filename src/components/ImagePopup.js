function ImagePopup({ isOpen, card, onClose }) {
  if (!isOpen) { 
    return null;
  }
  return (
    <section className={`${card ? "popup popup_opened" : "popup"} popup_zoom`}>
      <div className="popup__container popup__container_zoom">
        <button
          type="button"
          aria-label="close"
          className="popup__close popup__close_zoom"
          onClick={onClose}
        ></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__title_zoom">{card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
