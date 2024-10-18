export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }
  open() {}
  close() {
    this._popupElement.classList.remove(".modal__opened");
    document.removeEventListener("keyup", this._handleEscUp);
  }
  handleEscClose(evt) {}
  setEventListeners() {}
}
