function Main(props) {    
    
  return(
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src="."
            alt="Аватар"
          />
          <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title"></h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements">
        
      </section>
    </main>
  )
}

export default Main;