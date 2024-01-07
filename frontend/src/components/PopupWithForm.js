import React from "react";
function PopupWithForm({onSubmit, isOpen, buttonText, onClose, ...props }) {
  return (
      <div className={`popup popup_${props.name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button className="popup__button-close" type="button" onClick={onClose}></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`form_${props.name}`} onSubmit={onSubmit} noValidate>
            {props.children}
            <button type="submit" className="popup__submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
