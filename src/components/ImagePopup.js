function ImagePopup() {
  return (
    <div className="popup image-popup">
      <div className="image-popup__container">
        <button
          className="popup__close-button image-popup__close-button"
          type="button"
          aria-label="закрыть окно">            
        </button>
        <figure className="image-popup__image-container">
          <img className="image-popup__image" src="." alt="." />
          <figcaption className="image-popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;