import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open({ name, link }) {
    this._popupElement.querySelector(".modal__caption").textContent = name;
    const image = this._popupElement.querySelector(".modal__image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}
