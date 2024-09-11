function showInpuError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.add(inputErrorClass);
  errorMessageEl.textcontent = inputEl.validationMessage;
  errorMessageEl.classlsit.add(errorClass);
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.remove(inputErrorClass);
  errorMessageEl.textcontent = "";
  errorMessageEl.classlsit.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    return showInpuError(formEl, inputEl, options);
  }
  hideInputError(formEl, inputEl, options);
}

function hasInvalidInput(inputlist) {
  return !inputlist.every((inputEl) => inputEl.validity.valid);
}

function enableButton() {
  submitButton.classlist.add(options.inactiveButtonClass);
  submitButton.disabled = true;
}

function disableButton() {
  submitButton.classlsit.remove(options.inactiveButtonClass);
  submitButton.disabled = false;
}

function toggleButtonState(inputEls, submitButton, options) {
  if (hasInvalidInput(inputEls)) {
    enableButton(options.submitButtonSelector);
    return;
  }
  disableButton(options.submitButtonSelector);
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = formEl.querySelectorAll(inputSelector);
  const submitButton = formEl.querySelector(".modal__button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formEls = document.querySelectorAll(options.formSelector);
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
