import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [cardName, setCardName] = React.useState('');
  const [cardImageLink, setCardImageLink] = React.useState('');

  function handleCardName(e) {
    setCardName(e.target.value);
  }

  function handleCardLink(e) {
    setCardImageLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ cardName, cardImageLink });
  }

  React.useEffect(() => {
    setCardName("");
    setCardImageLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name={"add-card"}
      title={"Новое место"}
      buttonText={"Создать"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={cardName}
        onChange={handleCardName}
        id="cardname"
        type="text"
        name="cardname"
        className="popup__input popup__input_type_card-name"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        required
      />
      <span className="error-cardname error-message"></span>
      <input
        value={cardImageLink}
        onChange={handleCardLink}
        id="cardlink"
        type="url"
        name="link"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="error-cardlink error-message"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
