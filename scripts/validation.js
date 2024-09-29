// function showInpuError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
//   inputEl.classList.add(inputErrorClass);
//   errorMessageEl.textContent = inputEl.validationMessage;
//   errorMessageEl.classList.add(errorClass);
// }

// function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
//   const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
//   inputEl.classList.remove(inputErrorClass);
//   errorMessageEl.textContent = "";
//   errorMessageEl.classList.remove(errorClass);
// }

// function checkInputValidity(formEl, inputEl, options) {
//   if (!inputEl.validity.valid) {
//     return showInpuError(formEl, inputEl, options);
//   }
//   hideInputError(formEl, inputEl, options);
// }

// function hasInvalidInput(inputList) {
//   return !inputList.every((inputEl) => inputEl.validity.valid);
// }

// function enableButton(submitButton, { inactiveButtonClass }) {
//   submitButton.classList.add(inactiveButtonClass);
//   submitButton.disabled = true;
// }

// function disableButton(submitButton, { inactiveButtonClass }) {
//   submitButton.classList.remove(inactiveButtonClass);
//   submitButton.disabled = false;
// }

// function toggleButtonState(inputEls, options, submitButton) {
//   if (hasInvalidInput(inputEls)) {
//     enableButton(submitButton, options);
//     return;
//   }
//   disableButton(submitButton, options);
// }

// function setEventListeners(formEl, options) {
//   const { inputSelector } = options;
//   const inputEls = Array.from(formEl.querySelectorAll(inputSelector));
//   const submitButton = formEl.querySelector(options.submitButtonSelector);
//   inputEls.forEach((inputEl) => {
//     inputEl.addEventListener("input", (e) => {
//       checkInputValidity(formEl, inputEl, options);
//       toggleButtonState(inputEls, options, submitButton);
//     });
//   });
// }

// function enableValidation(options) {
//   const formEls = document.querySelectorAll(options.formSelector);
//   formEls.forEach((formEl) => {
//     formEl.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });
//     setEventListeners(formEl, options);
//   });
// }

// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };

// enableValidation(config);
