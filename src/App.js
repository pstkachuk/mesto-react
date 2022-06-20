import './index.css';
import headerLogo from './images/header-logo.svg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={headerLogo} alt="Логотип Место" className="header__logo" />
      </header>

      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src="."
              alt="Аватар"
            />
            <div className="profile__avatar-edit-button"></div>
          </div>
          <div className="profile__profile-info">
            <div className="profile__title-container">
              <h1 className="profile__title"></h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="редактировать профиль">
              </button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="добавить карточку">
          </button>
        </section>

        <section className="elements">

        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&#169; 2022. Павел Ткачук</p>
      </footer>

      <div className="popup profile-popup">
        <div className="popup__container">
          <h2 className="popup__form-title">Редактировать профиль</h2>
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть окно">
          </button>
          <form
            className="popup__form profile-popup__form"
            name="profile"
            novalidate
          >
            <input
              className="popup__input"
              type="text"
              name="name"
              id="name"
              required
              minlength="2"
              maxlength="40"
              placeholder="Имя"
            />
            <span className="popup__input-error name-error"></span>
            <input
              className="popup__input"
              type="text"
              name="about"
              id="about"
              required
              minlength="2"
              maxlength="200"
              placeholder="Информация о пользователе"
            />
            <span className="popup__input-error about-error"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup new-card">
        <div className="popup__container">
          <h2 className="popup__form-title">Новое место</h2>
          <button
            type="button"
            className="popup__close-button new-card__close-button"
            aria-label="закрыть окно"
          >
          </button>
          <form
            className="popup__form new-card__form"
            name="new-card"
            novalidate>
              <input
                className="popup__input"
                type="text"
                name="card-name"
                id="card-name"
                required
                placeholder="Название"
                minlength="2"
                maxlength="30"
              />
              <span className="popup__input-error card-name-error"></span>
              <input
                className="popup__input"
                type="url"
                name="link"
                id="link"
                required
                placeholder="Ссылка на картинку"
              />
              <span className="popup__input-error link-error"></span>
              <button type="submit" className="popup__submit-button new-card__submit-button">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup image-popup">
        <div className="image-popup__container">
          <button
            className="popup__close-button image-popup__close-button"
            type="button"
            aria-label="закрыть окно"
          >
          </button>
          <figure className="image-popup__image-container">
            <img
              className="image-popup__image"
              src="."
              alt="."
            />
            <figcaption className="image-popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup confirm-popup">
        <div className="popup__container">
          <h2 className="popup__form-title confirm-popup__form-title">Вы уверены?</h2>
          <button
            type="button"
            className="popup__close-button confirm-popup__close-button"
            aria-label="закрыть окно"
          >
          </button>
          <form
            className="popup__form confirm-popup__form"
            name="confirm"
            >
            <button type="submit" className="popup__submit-button confirm-popup__submit-button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup avatar-popup">
        <div className="popup__container">
          <h2 className="popup__form-title avatar-popup__form-title">Обновить аватар</h2>
          <button
            type="button"
            className="popup__close-button avatar-popup__close-button"
            aria-label="закрыть окно"
          >
          </button>
          <form
            className="popup__form avatar-popup__form"
            name="avatar"
            novalidate>
              <input
                className="popup__input"
                type="url"
                name="avatar-link"
                id="avatar-link"
                required
                placeholder="Ссылка"
              />
              <span className="popup__input-error avatar-link-error"></span>
              <button type="submit" className="popup__submit-button avatar-popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <template className="template">
        <div className="element">
          <img
            className="element__image"
            src="."
            alt="."
          />
          <div className="element__caption-container">
            <h2 className="element__caption"></h2>
            <div className="element__likes-container">
              <button
                className="element__like-button"
                type="button"
                aria-label="поставить лайк"
              >
              </button>
              <div className="element__likes-counter"></div>
            </div>
          </div>
          <div className="element__delete-button"></div>
        </div>
      </template>

    </div>
  );
}

export default App;
