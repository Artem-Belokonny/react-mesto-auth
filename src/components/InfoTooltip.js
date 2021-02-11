import React from "react";

function InfoTooltip({ isOpen, onClose, name, InfoTool }) {
  return (
    <section
      className={`${isOpen ? "popup popup_opened" : "popup"} popup_${name}`}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className={`popup__close popup__close_${name}`}
        />
        <img src={InfoTool.image} alt="Картинка" className="popup__logo" />
        <h2 className="popup__title popup__title_register">{InfoTool.message}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
