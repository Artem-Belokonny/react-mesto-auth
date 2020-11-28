import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="page">
    <header className="header">
      <a href="#" className="header__logo-link"><img src="./images/logo-white.svg" alt="Логотип" className="header__logo" /></a>
    </header>
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <img src="#" alt="Аватарка" className="profile__avatar" />
          <div className="profile__edit-avatar">
            <img src="./images/edit-button.svg" alt="Редактировать" className="profile__edit-avatar-image" />
          </div>
        </div>
        <div className="profile__personal-info">
          <div className="profile__personal-adaptiv">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button"><img src="./images/edit-button.svg" alt="Редактировать"
                className="profile__edit-button-image" /></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>

      <section className="elements">

      </section>

    </main>

    <section className="popup popup_edit">
      <div className="popup__container">
        <form action="#" name="profile-form" className="popup__form popup__container popup__container_edit" novalidate>
          <button type="button" aria-label="close" className="popup__close popup__close_edit"></button>
          <h2 className="popup__title popup__title_edit">Редактировать профиль</h2>
          <input type="text" name="name" minlength="2" maxlength="40" required
            className="popup__input popup__input_edit_name" id="edit-name" />
          <span className="popup__input-error" id="edit-name-error"></span>
          <input type="text" name="about" minlength="2" maxlength="200" required
            className="popup__input popup__input_edit_about" id="edit-about" />
          <span className="popup__input-error" id="edit-about-error"></span>
          <button type="submit" className="popup__save popup__save_edit">Сохранить</button>
        </form>
      </div>
    </section>

    <section className="popup popup_add">
      <div className="popup__container">
        <form action="#" name="add-form" className="popup__form popup__container popup__container_add" novalidate>
          <button type="button" aria-label="close" className="popup__close popup__close_add"></button>
          <h2 className="popup__title popup__title_add">Новое место</h2>
          <input type="text" name="name" minlength="2" maxlength="30" required placeholder="Название"
            className="popup__input popup__input_add-title" id="add-title" />
          <span className="popup__input-error" id="add-title-error"></span>
          <input type="url" name="link" placeholder="Ссылка на картинку" required
            className="popup__input popup__input_add-link" id="add-link" />
          <span className="popup__input-error" id="add-link-error"></span>
          <button type="submit" className="popup__save popup__save_add">Сохранить</button>
        </form>
      </div>
    </section>

    <section className="popup popup_zoom">
      <div className="popup__container popup__container_zoom">
        <button type="button" aria-label="close" className="popup__close popup__close_zoom"></button>
        <img src="#" alt="" className="popup__image" />
        <p className="popup__title_zoom"></p>
      </div>
    </section>

    <section className="popup popup_delete">
      <div className="popup__container">
        <form action="#" name="delete-form" className="popup__form popu popup__container popup__container_delete">
          <button type="button" aria-label="close" className="popup__close popup__close_delete"></button>
          <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
          <button type="submit" className="popup__save popup__save_delete">Да</button>
        </form>
      </div>
    </section>

    <section className="popup popup_editAvatar">
      <div className="popup__container">
        <form action="#" name="editAvatar-form" className="popup__form popup__container popup__container_editAvatar"
          novalidate>
          <button type="button" aria-label="close" className="popup__close popup__close_editAvatar"></button>
          <h2 className="popup__title popup__title_editAvatar">Обновить аватар</h2>
          <input type="url" name="link" placeholder="Ссылка на новый аватар" required
            className="popup__input popup__input_editAvatar-link" id="editAvatar-link" />
          <span className="popup__input-error" id="editAvatar-link-error"></span>
          <button type="submit" className="popup__save popup__save_editAvatar">Сохранить</button>
        </form>
      </div>
    </section>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
  </div>

  <template className="elements-template">
    <article className="elements__card">
      <img src="#" alt="" className="elements__image" />
      <div className="elements__group">
        <p className="elements__title"></p>
        <div className="elements__likes-container">
          <button type="button" className="elements__like"></button>
          <p className="elements__likes-count"></p>
        </div>
        <button type="button" aria-label="delete" className="elements__delete-button">
          <img src="./images/bin1.svg" alt="Удалить" className="elements__delete-top" />
          <img src="./images/bin2.svg" alt="Удалить" className="elements__delete-bottom" />
        </button>
      </div>
    </article>
  </template>
  </>
  );
}

export default App;
