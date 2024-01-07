import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onCardClick, onCardLike, onCardDelete, ...props }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__like ${
    isLiked && "elements__like_active"
  }`;

  function handleLikeClick() {
    onCardLike(props);
  }

  function handleClick() {
    onCardClick(props);
  }

  function handleCardDelete() {
    onCardDelete(props);
  }


  return (
    <div className="elements__item">
      <img
        src={props.link}
        alt={props.name}
        className="elements__img"
        onClick={handleClick}
      />
      <div className="elements__about">
        <h2 className="elements__name">{props.name}</h2>
        <div className="elements__like-group">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Лайк"
            onClick={handleLikeClick}
          ></button>
          <p className="elements__like-count">{props.likes.length}</p>
        </div>
        {isOwn && (
          <button
            className="elements__delete"
            type="button"
            aria-label="Удалить"
            onClick={handleCardDelete}
          ></button>
        )}
      </div>
    </div>
  );
}

export default Card;
