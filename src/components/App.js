import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);  //стейт индикатора загрузки запросов

  useEffect(() => {   //запрос данных пользователя
    api.getUserInfo()
    .then(setCurrentUser)
    .catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {   //запрос карточек
    api.getCards()
    .then(setCards)
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
      .then(handleSetCardsState)
      .catch((err) => {
        console.log(err);
      })
    } else {
      api.like(card._id)
      .then(handleSetCardsState)
      .catch((err) => {
        console.log(err);
      })
    }
  } 

  function handleCardDelete(card) {   //удалить карточку
    api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item._id !== card._id))
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
    setIsLoading(true);
    api.setUserInfo(userData.name, userData.about)
    .then(setCurrentUser)
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
      closeAllPopups(); 
    });
  }

  function handleUpdateAvatar(userData) {   //запрос на обновление аватара
    setIsLoading(true);
    api.setAvatar(userData.avatar)
    .then(setCurrentUser)
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
      closeAllPopups(); 
    });
  }

  function handleAddPlaceSubmit(cardData) {
    setIsLoading(true);
    api.addNewCard(cardData.name, cardData.link)
    .then((newCard) => {
      setCards([newCard, ...cards])
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
      closeAllPopups(); 
    });
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
          isLoading={isLoading}
        />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />        

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
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
