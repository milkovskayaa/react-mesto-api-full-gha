import React from "react";

function InfoTooltip({isOpen, onClose, statusImage, statusText}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button className="popup__button-close" type="button" onClick={onClose}></button>
          <img src={statusImage} alt="иконка статуса регистрации" className="popup__img-registration" />
          <h2 className="popup__title popup__title-registration">{statusText}</h2>
        </div>
      </div>
  )
}

export default InfoTooltip;