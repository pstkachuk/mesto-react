import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({isOpen, onClose, isLoading, onDeleteCard}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm
      name="confirm-popup"
      title="Вы уверены?" 
      textOnButton="Да" 
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  )
}

export default ConfirmPopup;