function ImagePopup({onClose, card}) {
  return (
    <div className={`popup image-popup ${card.name && 'popup_opened'}`}>
      <div className="image-popup__container">
        <button
          className="popup__close-button image-popup__close-button"
          type="button"
          aria-label="закрыть окно"
          onClick={onClose}
          >
        </button>
        <figure className="image-popup__image-container">
          <img className="image-popup__image" src={card.link} alt={card.name} />
          <figcaption className="image-popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )  
}

export default ImagePopup;