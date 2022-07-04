import { useEffect, useState, useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

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

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item !== card))
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  useEffect(() => {   //запрос карточек
    api.getCards()
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
    
  return(
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements">    {/* отрисовка полученных карточек */}
       {cards.map((cardItem) => (
        <Card 
          key={cardItem._id} 
          card={cardItem}
          onCardClick={props.onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        /> 
        )
       )}
      </section>

    </main>
  )
}

export default Main;