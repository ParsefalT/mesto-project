function showInputError(formElement, inputElement, errorMessage, objForm) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objForm.inputErrorClass);
};
 
function hideInputError(formElement, inputElement, objForm) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(objForm.inputErrorClass);
};

function isValid(formElement, inputElement, objForm) {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, objForm);
    } else {
        hideInputError(formElement, inputElement, objForm);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, btnSave, objForm) {
    if (hasInvalidInput(inputList)) {
        btnSave.classList.add(objForm.inactiveButtonClass);
    } else {
        btnSave.classList.remove(objForm.inactiveButtonClass);
    } 
};
 
function setEventListeners(formElement, objForm){
    const inputList = Array.from(formElement.querySelectorAll(objForm.popupInfo));
    const btnSave = formElement.querySelector(objForm.submitButton);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, objForm)
            toggleButtonState(inputList, btnSave, objForm);
        });

    }); 
};

function enableValidation(objForm) {
    const formList = Array.from(document.querySelectorAll(objForm.forms));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, objForm);
    });
}

export {enableValidation};