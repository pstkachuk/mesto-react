function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return(
    <div className="element">
    <img 
      className="element__image" 
      src={props.card.link}
      alt={props.card.name}
      onClick={handleCardClick}
    />
    <div className="element__caption-container">
      <h2 className="element__caption">{props.card.name}</h2>
      <div className="element__likes-container">
        <button
          className="element__like-button"
          type="button"
          aria-label="поставить лайк"
        ></button>
        <div className="element__likes-counter">{props.card.likes.length}</div>
      </div>
    </div>
    <div className="element__delete-button"></div>
  </div>
  )
}

export default Card;