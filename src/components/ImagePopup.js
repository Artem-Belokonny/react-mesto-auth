function ImagePopup() {
  return (
    <section className="popup popup_zoom">
      <div className="popup__container popup__container_zoom">
        <button
          type="button"
          aria-label="close"
          className="popup__close popup__close_zoom"
        ></button>
        <img src="#" alt="" className="popup__image" />
        <p className="popup__title_zoom"></p>
      </div>
    </section>
  );
}

export default ImagePopup;
