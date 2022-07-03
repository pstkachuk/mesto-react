import { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {   //запрос данных пользователя
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        (
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm 
          name="profile-popup" 
          title="Редактировать профиль" 
          textOnButton="Сохранить" 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          >
          <input
            className="popup__input"
            type="text"
            name="name"
            id="name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span className="popup__input-error name-error"></span>
          <input
            className="popup__input"
            type="text"
            name="about"
            id="about"
            required
            minLength="2"
            maxLength="200"
            placeholder="Информация о пользователе"
          />
          <span className="popup__input-error about-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          name="new-card" 
          title="Новое место" 
          textOnButton="Создать" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          >
          <input
            className="popup__input"
            type="text"
            name="card-name"
            id="card-name"
            required
            placeholder="Название"
            minLength="2"
            maxLength="30"
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

        <PopupWithForm 
          name="avatar-popup" 
          title="Обновить аватар" 
          textOnButton="Сохранить" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          >
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

        <PopupWithForm 
          name="confirm-popup" 
          title="Вы уверены?" 
          textOnButton="Да" 
        />

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />
        )
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
