import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;  //проверка владельца карточки
  const cardDeleteButtonClassName = (`element__delete-button ${!isOwn && 'element__delete-button_hide'}`); //Скрыть кнопку, если текущий пользователь не владелец карточки
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);  //текущий пользователь "лайкнул" карточку
  const cardLikeButtonClassName = (`element__like-button ${isLiked && 'element__like-button_active'}`);  //отобразить лайк

  function handleClick() {
    props.onCardClick(props.card);    
  }

  return(
    <div className="element">
    <img 
      className="element__image" 
      src={props.card.link}
      alt={props.card.name}
      onClick={handleClick}
    />
    <div className="element__caption-container">
      <h2 className="element__caption">{props.card.name}</h2>
      <div className="element__likes-container">
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="поставить лайк">        
        </button>
        <div className="element__likes-counter">{props.card.likes.length}</div>
      </div>
    </div>
    <div className={cardDeleteButtonClassName}></div>
  </div>
  )
}

export default Card;