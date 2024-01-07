import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onUpdateUser, isOpen, onClose }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, description });
  }

  React.useEffect(() => {
    setName(currentUser.name ?? "");
    setDescription(currentUser.about ?? "");
  }, [currentUser,isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={"edit-profile"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
    >
      <input
        value={name}
        onChange={handleNameChange}
        id="username"
        type="text"
        name="username"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="40"
        required
        placeholder="Введите имя"
      />
      <span className="error-username error-message"></span>
      <input
        value={description}
        onChange={handleDescriptionChange}
        id="job"
        type="text"
        name="job"
        className="popup__input popup__input_type_about"
        minLength="2"
        maxLength="200"
        required
        placeholder="Укажите свой род деятельности"
      />
      <span className="error-job error-message"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
