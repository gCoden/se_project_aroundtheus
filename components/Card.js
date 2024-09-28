class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewImage());

    this._element
      .querySelector("card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard());

    this._element
      .querySelector("card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());
  }

  _handlePreviewImage() {}

  _handleDeleteCard() {}

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
  }
}
export default Card;
