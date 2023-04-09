"use strict";
const profileChange       = document.querySelector('.profile__change');
const popupEdit           = document.querySelector('.popup_edit-profile');
const popupName           = document.querySelector('.popup__name');
const popupDescr          = document.querySelector('.popup__descr');
const popupCreateCard     = document.querySelector('.popup_add-card');
const popupCardName       = document.querySelector('.popup__card-name');
const popupCardLink       = document.querySelector('.popup__card-link');
const popupImage          = document.querySelector('.popup__image');
const buttonsClosePopup   = document.querySelectorAll('.popup__close');
const buttonCard          = document.querySelector('.profile__button');
const cardsList           = document.querySelector('.elements');
const profileTitle        = document.querySelector('.profile__title');
const profileDescr        = document.querySelector('.profile__descr');
const popupSave           = document.querySelector('.popup__save');
const formEditProfile     = document.querySelector('.popup_form-change');
const formCards           = document.querySelector('.popup_form-submit');
const popupImages         = document.querySelector('.popup__img');
const popupCaption        = document.querySelector('.popup__caption');
const cardTemplate        = document.querySelector('#cards').content;


// priflePopup
function submitFormEditProfile(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileDescr.textContent = popupDescr.value;
    closePopup(popupEdit);
}
formEditProfile.addEventListener('submit', submitFormEditProfile);


// cardPopup
function createCard(nameValue, linkValue) {
    const card = cardTemplate.querySelector('.element').cloneNode(true);
    const like = card.querySelector('.element__like');
    const trash = card.querySelector('.element__trash');
    const cardImg = card.querySelector('.element__img');
    const cardTitle = card.querySelector('.element__title');
    cardImg.src = linkValue;
    cardImg.alt = nameValue;
    cardTitle.textContent = nameValue;
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
            openPopup(popupImage);
            fillInImageData(e, popupImages, popupCaption);
        }
    })
    return card;
}

function addCard(card) {
    cardsList.prepend(card);
}

function fillInImageData(e, popupImages, popupCaption) {
    const card = e.target.parentNode;
    const image = card.querySelector('.element__img');
    const title = card.querySelector('.element__title');
    popupImages.src = image.src;
    popupImages.alt = title.textContent;
    popupCaption.textContent = title.textContent;
}

for (let card of initialCards) {
    addCard(createCard(card.name, card.link))
}

formCards.addEventListener('submit', function(e) {
    e.preventDefault();
    addCard(createCard(popupCardName.value, popupCardLink.value))
    closePopup(popupCreateCard);
    formCards.reset();
});

// listeners
function openPopup(openPopup) {
    openPopup.classList.add('popup_opened');
}
function closePopup(closePopup) {
    closePopup.classList.remove('popup_opened');
}

profileChange.addEventListener('click', function(e) {
    if (e.target && e.currentTarget) {
        openPopup(popupEdit);
        popupName.value = profileTitle.textContent;
        popupDescr.value = profileDescr.textContent;
    }
});

buttonCard.addEventListener('click', (e) => {
    if (e.target && e.currentTarget) {
        openPopup(popupCreateCard);
    }
})

buttonsClosePopup.forEach(item => {
    item.addEventListener('click', (e) => {
        const popup = e.target.parentNode.parentNode;
        if (e.target.className === 'popup__close') {
            closePopup(popup);
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



