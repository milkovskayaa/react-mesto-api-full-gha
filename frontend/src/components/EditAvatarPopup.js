import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen])

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={"update-avatar"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      onClose={onClose}
    >
      <input
        id="avatar"
        ref={avatarRef}
        type="url"
        name="avatar"
        className="popup__input popup__input_type_link"
        required
        placeholder="Ссылка на изображение"
      />
      <span className="error-avatar error-message"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
