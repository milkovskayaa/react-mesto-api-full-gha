import React from "react";
function ImagePopup({ isOpen, onClose, ...props }) {
  return (
    <div className={`popup popup_card-image ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button className="popup__button-close" onClick={onClose}></button>
        <img
          role="button"
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <p className="popup__image-name">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
