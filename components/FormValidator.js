class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formEl = formEl;
  }

  _showInputError(inputEl) {
    this._errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = inputEl.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  hideInputError(inputEl) {
    this._errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    this._errorMessageEl.textContent = "";
    this._errorMessageEl.classList.remove(this._errorClass);
  }

  _enableButton(submitButton) {
    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.disabled = true;
  }

  _disableButton(submitButton) {
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  _toggleButtonState(inputEls, settings, submitButton) {
    if (hasInvalidInput(inputEls)) {
      _enableButton(submitButton, settings);
      return;
    }
    _disableButton(submitButton, settings);
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _checkInputValidity(formEl, inputEl, settings) {
    if (!inputEl.validity.valid) {
      return _showInpuError(formEl, inputEl, settings);
    }
    _hideInputError(formEl, inputEl, settings);
  }

  _setEventListeners(inputEls, settings, submitButton) {
    this._inputEls = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, settings);
        toggleButtonState(inputEls, settings, submitButton);
      });
    });
  }

  enableValidation(formEl, settings) {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, settings);
  }
}

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// const editFormValidator = new FormValidator(settings, profileEditForm);
// editFormValidator.enableValidation();
// const addFormValidator = new FormValidator(settings, addCardForm);
// addFormValidator.enableValidation();

export default FormValidator;
