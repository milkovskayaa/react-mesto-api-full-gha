import React from "react";
import headerLogo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, userData, signOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
      <ul className="header__navigation">
        {loggedIn ? (
          <li className="header__link header__userinfo">{userData.email}</li>
        ) : (
          ""
        )}
        {location.pathname === "/my-profile" ? (
          <li>
            <button onClick={signOut} className="header__link header__button">
              Выйти
            </button>
          </li>
        ) : (
          ""
        )}
        {location.pathname === "/sign-up" ? (
          <li>
            <Link to="sign-in" className="header__link">
              Войти
            </Link>
          </li>
        ) : (
          ""
        )}
        {location.pathname === "/sign-in" ? (
          <li>
            <Link to="sign-up" className="header__link">
              Регистрация
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
}

export default Header;
