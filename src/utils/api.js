import { handleOriginalResponse } from "../utils/utils.js";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  setToken(token){
    this.headers.authorization = `Bearer ${token}` ;
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      });
  }

  patchUserData(userData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      });
  }

  patchUserAvatar(userAvatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(userAvatar),
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  postNewCard(cardData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  deleteCard(cardData) {
    return fetch(`${this.baseUrl}/cards/${cardData}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  putLike(_id) {
    return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
      method: "PUT",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      });
  }

}

const api = new Api({
  baseUrl: "http://api.volorel-mesto.students.nomoreparties.space",
  headers: {
    "authorization": `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
});


export default api;
