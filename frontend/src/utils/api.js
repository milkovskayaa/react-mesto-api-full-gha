export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получение информации о пользователе с сервера
  getInfoProfile(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }

  // получение карточек с сервера
  getCards(token) {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }
  // добавление новой карточки
  postNewCard(name, link, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._handleResponse);
  }

  // обновление аватара пользователя
  updateAvatar(avatar, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._handleResponse);
  }
  // обновление информации о пользователе
  updateUserInfo(name, about, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._handleResponse);
  }

  // удаление карточки
  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }

  // постановка лайка на карточку
  onLikeCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }

  // снятие лайка с карточки
  deleteLikeCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then(this._handleResponse);
  }
}

const api = new Api({
  url: 'http://localhost:3000',
});

export default api;
