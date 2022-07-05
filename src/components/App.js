import { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {   //запрос данных пользователя
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {   //запрос карточек
    api.getCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  function handleSetCardsState(card) {
    setCards((state) => state.map((cardItem) => cardItem._id === card._id ? card : cardItem));
  }  

  function handleCardLike(card) {     //поставить/убрать лайк
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    if (isLiked) {
      api.deleteLike(card._id)
      .then((newCard) => {
        handleSetCardsState(newCard);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      api.like(card._id)
      .then((newCard) => {
        handleSetCardsState(newCard);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  } 

  function handleCardDelete(card) {   //удалить карточку
    api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item !== card))
    })
    .catch((err) => {
      console.log(err);
    })
  }

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

  function handleUpdateUser(userData) {
    api.setUserInfo(userData.name, userData.about)
    .then((userDataUpdate) => {
      setCurrentUser(userDataUpdate);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(userData) {   //запрос на обновление аватара
    api.setAvatar(userData.avatar)
    .then((userDataUpdate) => {
      setCurrentUser(userDataUpdate);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleAddPlaceSubmit(cardData) {
    api.addNewCard(cardData.name, cardData.link)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />        

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
         />        

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
