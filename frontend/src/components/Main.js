import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  loggedIn,
  userData,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  cards,
  onCardDelete
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay-img" onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Фотография профиля"
            className="profile__img"
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-user">
            <h1 className="profile__username">{currentUser.name}</h1>
            <p className="profile__about">{currentUser.about}</p>
          </div>
          <button
            className="profile__button profile__button_type_edit"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать"
          ></button>
        </div>
        <button
          className="profile__button profile__button_type_add"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="elements">
        {cards.map(item => (
          <Card
            key={item._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            {...item}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
