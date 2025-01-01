import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardSelector = "#card-template";

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const profileEditButton = document.querySelector("#profile-edit-button");
const addNewCardButton = document.querySelector("#profile-add-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleinput = document.querySelector("#profile-title-input");
const profileDescriptioninput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");

const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton = previewImageModal.querySelector(
  "#preview-image-close-button"
);
const modalImageElement = previewImageModal.querySelector(".modal__image");
const modalHeadingElement = previewImageModal.querySelector(".modal__caption");
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const userInfo = new UserInfo(".profile__title", "profile__description");

const newCardPopup = new PopupWithForm(
  { popupSelector: "#add-card-modal" },
  handleAddCardFormSubmit
);

newCardPopup.setEventListeners();

const imagePopup = new PopupWithImage({ popupSelector: ".modal__image" });

imagePopup.setEventListeners();

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = createCard(item);
      cardSection.addItems(cardEl);
    },
  },
  "cards__list"
);

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const addFormValidator = new FormValidator(validationSettings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handlePreviewImage(name, link) {
  imagePopup.open({ name, link });
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleinput.value;
  profileDescription.textContent = profileDescriptioninput.value;
  imagePopup.close();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(addCardModal);
  addFormValidator._enableButton();
  e.target.reset();
}

function createCard(item) {
  const card = new Card(item, cardSelector, handlePreviewImage);
  return card.getView();
}

function renderCard(cardData, wrapper) {
  const card = createCard(cardData);
  wrapper.prepend(card);
}

previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModal)
);

profileEditButton.addEventListener("click", () => {
  profileTitleinput.value = profileTitle.textContent;
  profileDescriptioninput.value = profileDescription.textContent;
  newCardPopup.open();
});

profileEditCloseButton.addEventListener("click", () => newCardPopup.close());

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

addNewCardButton.addEventListener("click", () => newCardPopup.open());

addCardModalCloseButton.addEventListener("click", () => newCardPopup.close());

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
