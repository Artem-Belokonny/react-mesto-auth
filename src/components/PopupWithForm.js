function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <section className={`${isOpen ? "popup popup_opened" : "popup"} popup_${name}`}>
      <div className="popup__container">
        <form
          action="#"
          name={`${name}-form`}
          className={`popup__form popup__container popup__container_${name}`}
          noValidate
        >
          <button
            type="button"
            aria-label="close"
            onClick={onClose}
            className={`popup__close popup__close_${name}`}
          ></button>
          <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
          {children}
          <button
            type="submit"
            onClick={onClose}
            className={`popup__save popup__save_${name}`}
          >
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
