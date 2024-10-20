export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }
  open() {
    this._popupElement.classList.add(".modal__opened");
  }
  close() {
    this._popupElement.classList.remove(".modal__opened");
    document.removeEventListener("keyup", this._handleEscUp);
  }
  _handleEscUp(evt) {
    evt.preventDefault();

    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__opened")
      ) {
        this.close();
      }
    });
  }
}
