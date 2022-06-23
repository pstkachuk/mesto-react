import { useEffect, useState} from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  
  useEffect(() => {   //запрос карточек и данных пользователя
    api.getAllData()
    .then(([userData, cards]) => {
      setCards(cards);
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar)
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
            src={userAvatar}
            alt="Аватар"
          />
          <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
        /> 
        )
       )}
      </section>

    </main>
  )
}

export default Main;