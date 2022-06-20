import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';



function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="profile-popup" title="Редактировать профиль" textOnButton="Сохранить">
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
      </PopupWithForm>

      <PopupWithForm name="new-card" title="Новое место" textOnButton="Создать">
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
      </PopupWithForm>

      <PopupWithForm name="avatar-popup" title="Обновить аватар" textOnButton="Сохранить">
        <input
          className="popup__input"
          type="url"
          name="avatar-link"
          id="avatar-link"
          required
          placeholder="Ссылка"
        />
        <span className="popup__input-error avatar-link-error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm-popup" title="Вы уверены?" textOnButton="Да" />
      
      <div className="popup image-popup">
        <div className="image-popup__container">
          <button
            className="popup__close-button image-popup__close-button"
            type="button"
            aria-label="закрыть окно"
          ></button>
          <figure className="image-popup__image-container">
            <img className="image-popup__image" src="." alt="." />
            <figcaption className="image-popup__caption"></figcaption>
          </figure>
        </div>
      </div>    

      <template className="template">
        <div className="element">
          <img className="element__image" src="." alt="." />
          <div className="element__caption-container">
            <h2 className="element__caption"></h2>
            <div className="element__likes-container">
              <button
                className="element__like-button"
                type="button"
                aria-label="поставить лайк"
              ></button>
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
