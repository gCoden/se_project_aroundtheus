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
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton = previewImageModal.querySelector(
  "#preview-image-close-button"
);
const modalImageElement = previewImageModal.querySelector(".modal__image");
const modalHeadingElement = previewImageModal.querySelector(".modal__caption");

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashCardButton = cardElement.querySelector(".card__delete-button");

  cardImageEl.addEventListener("click", () => {
    modalImageElement.src = cardData.link;
    modalImageElement.alt = cardData.name;
    modalHeadingElement.textContent = cardData.name;
    openModal(previewImageModal);
  });

  trashCardButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleinput.value;
  profileDescription.textContent = profileDescriptioninput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(addCardModal);
  e.target.reset();
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.addEventListener("keydown", handleEscModal);
  document.addEventListener("click", handleCloseOverlay);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscModal);
  document.addEventListener("click", handleCloseOverlay);
}

function handleCloseOverlay(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closePopup(evt.target);
  }
}

function handleEscModal(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    if (modalOpened) {
      closePopup(modalOpened);
    }
  }
}

previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModal)
);

profileEditButton.addEventListener("click", () => {
  profileTitleinput.value = profileTitle.textContent;
  profileDescriptioninput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

addNewCardButton.addEventListener("click", () => openModal(addCardModal));

addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
