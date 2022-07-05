import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault(); 
    props.onAddPlace({
      name,
      link
    });
    setName('');
    setLink('');
  }

  function handleSetName(evt) {
    setName(evt.target.value);
  }

  function handleSetLink(evt) {
    setLink(evt.target.value);
  }
 
  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      textOnButton="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <input
        className="popup__input"
        type="text"
        name="card-name"
        id="card-name"
        required
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name || ''}
        onChange={handleSetName}
      />
      <span className="popup__input-error card-name-error"></span>
      <input
        className="popup__input"
        type="url"
        name="link"
        id="link"
        required
        placeholder="Ссылка на картинку"
        value={link || ''}
        onChange={handleSetLink}
      />
      <span className="popup__input-error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;