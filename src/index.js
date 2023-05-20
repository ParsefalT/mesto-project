"use strict";
// main cssStyleForWebPack
import './pages/index.css';

// main imports
import initialCards from "./components/constants.js";
import { openPopup, closePopup } from "./components/utils.js";
import { createCard, addCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js" 
import { closePopupOverlay, btnClosePopup, openPopupCard } from "./components/modal.js";
import { setProfileDate } from './components/api';
// main variables
const profileChange       = document.querySelector('.profile__change');
const popupEdit           = document.querySelector('.popup_edit-profile');
const popupName           = document.querySelector('.popup__name');
const popupDescr          = document.querySelector('.popup__descr');
const popupCreateCard     = document.querySelector('.popup_add-card');
const popupCardName       = document.querySelector('.popup__card-name');
const popupCardLink       = document.querySelector('.popup__card-link');
const profileTitle        = document.querySelector('.profile__title');
const profileDescr        = document.querySelector('.profile__descr');
const formEditProfile     = document.querySelector('.popup_form-change');
const formCards           = document.querySelector('.popup_form-submit');
const btnDisabled         = document.querySelector('.popup__save.popup__save_card');

// modal
closePopupOverlay()
btnClosePopup()
openPopupCard()

// profilePopup
function submitFormEditProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileDescr.textContent = popupDescr.value;
    setProfileDate(profileTitle.textContent, profileDescr.textContent, "PATCH")
    closePopup(popupEdit);
}
formEditProfile.addEventListener('submit', submitFormEditProfile);

for (let card of initialCards) {
    addCard(createCard(card.name, card.link))
}

formCards.addEventListener('submit', function(e) {
    e.preventDefault();
    addCard(createCard(popupCardName.value, popupCardLink.value));
    closePopup(popupCreateCard);
    btnDisabled.disabled = true; 
    btnDisabled.classList.add('popup__save_disabled') 
    formCards.reset();
});

profileChange.addEventListener('click', function(e) {
    // console.log(f) 
    if (e.target && e.currentTarget) {
        openPopup(popupEdit);
        popupName.value = profileTitle.textContent;
        popupDescr.value = profileDescr.textContent;
    }
});

enableValidation({
    forms: '.popup__form',
    popupInfo: '.popup__info',
    submitButton: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__info-error_active',
});