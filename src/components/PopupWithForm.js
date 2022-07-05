function PopupWithForm(props) {

  return(
    <div className={`popup ${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__form-title">{props.title}</h2>
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть окно"
          onClick={props.onClose}>
        </button>
        <form
          className={`popup__form ${props.name}__form`}
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate>
            {props.children}         
            <button type="submit" className="popup__submit-button">
              {props.textOnButton}
            </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;