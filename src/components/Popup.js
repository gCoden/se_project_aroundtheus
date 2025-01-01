export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }
  open() {
    this._popupElement.classList.add(".modal_opened");
  }
  close() {
    this._popupElement.classList.remove(".modal_opened");
    document.removeEventListener("keyup", this._handleEscUp);
  }
  _handleEscUp(evt) {
    evt.preventDefault();

    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    document.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal_opened")
      ) {
        this.close();
      }
    });
  }
}
