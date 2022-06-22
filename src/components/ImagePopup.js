function ImagePopup(props) {
  return (
    <div className={`popup image-popup ${props.card.name && 'popup_opened'}`}>
      <div className="image-popup__container">
        <button
          className="popup__close-button image-popup__close-button"
          type="button"
          aria-label="закрыть окно"
          onClick={props.onClose}
          >            
        </button>
        <figure className="image-popup__image-container">
          <img className="image-popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="image-popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )  
}

export default ImagePopup;