import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="avatar-popup"
      title="Обновить аватар"
      textOnButton="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <input
        className="popup__input"
        type="url"
        name="avatar-link"
        id="avatar-link"
        required
        placeholder="Ссылка"
        ref={avatarRef}
      />
      <span className="popup__input-error avatar-link-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;