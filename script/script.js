"use strict";
const profileChange   = document.querySelector('.profile__change');
const popupEdit       = document.querySelector('.popup_edit-profile');
const popupName       = document.querySelector('.popup__name');
const popupDescr      = document.querySelector('.popup__descr');
const popupCreateCard = document.querySelector('.popup_add-card');
const popupCardName   = document.querySelector('.popup__card-name');
const popupCardLink   = document.querySelector('.popup__card-link');
const popupImage      = document.querySelector('.popup__image');
const popupBtnClose   = document.querySelectorAll('.popup__close');
const buttonCard      = document.querySelector('.profile__button');
const elem            = document.querySelector('.elements');
const profileTitle    = document.querySelector('.profile__title');
const profileDescr    = document.querySelector('.profile__descr');
const popupInfo       = document.querySelectorAll('.popup__info');
const popupSave       = document.querySelector('.popup__save');
const formChange      = document.querySelector('.popup_form-change');
const formCards       = document.querySelector('.popup_form-submit');
const popupImages     = document.querySelector('.popup__img');
const popupCaption    = document.querySelector('.popup__caption');
const cardTemplate    = document.querySelector('#cards').content;

// priflePopup
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileDescr.textContent = popupDescr.value;
    popupEdit.classList.remove('popup_opened');
    formChange.reset();
}
formChange.addEventListener('submit', handleFormSubmit);

// cardPopup
function createCard(nameValue, linkValue) {
    const card = cardTemplate.querySelector('.element').cloneNode(true);
    const like = card.querySelector('.element__like');
    const trash = card.querySelector('.element__trash');
    card.querySelector('.element__img').src = linkValue;
    card.querySelector('.element__img').alt = nameValue;
    card.querySelector('.element__title').textContent = nameValue;
    card.addEventListener('click', (e) => {
        if (e.target.className === 'element__like' && e.target.nodeName === 'BUTTON') {
            like.classList.add('element__like_active');
        } else {
            like.classList.remove('element__like_active');
        }
        if (e.target.className === 'element__trash' && e.target.nodeName === 'IMG') {
            trash.parentNode.remove();
        }
        if (e.target.className === 'element__img' && e.target.nodeName ==='IMG') {
            popupImage.classList.add('popup_opened');
            popupImg(e, popupImages, popupCaption)
        }
    })
    elem.prepend(card);
}
function popupImg(e, popupImages, popupCaption) {
    const card = e.target.parentNode;
    const image = card.querySelector('.element__img');
    const title = card.querySelector('.element__title');
    popupImages.src = image.src;
    popupImages.alt = title.textContent;
    popupCaption.textContent = title.textContent;
}

for (let card of initialCards) {
    createCard(card.name, card.link)
}

formCards.addEventListener('submit', function(e) {
    e.preventDefault();
    createCard(popupCardName.value, popupCardLink.value);
    popupCreateCard.classList.remove('popup_opened');
    formCards.reset();
});

// listeners
function popupOpen(popupOpen) {
    popupOpen.classList.add('popup_opened');
}
function popupClose(popupClose) {
    popupClose.classList.remove('popup_opened');
}

profileChange.addEventListener('click', function(e) {
    if (e.target && e.currentTarget) {
        popupOpen(popupEdit);
    }
});

buttonCard.addEventListener('click', (e) => {
    if (e.target && e.currentTarget) {
        popupOpen(popupCreateCard);
    }
})

popupBtnClose.forEach(item => {
    item.addEventListener('click', (e) => {
        const close = e.target.parentNode.parentNode;
        if (e.target.className === 'popup__close') {
            popupClose(close)
        }
    });
});
// Если не пртоив, я оставил этот коментарий для след месяца 
// document.addEventListener('keydown', function(e) {
//     if (e.code == 'Escape') {
//         popup.forEach(item => {
//             item.classList.remove('popup_opened');
//         });
//     }
// });



