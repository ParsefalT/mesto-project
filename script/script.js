"use strict";
const profileChange   = document.querySelector('.profile__change');
const popup           = document.querySelectorAll('.popup');
const popupClose      = document.querySelectorAll('.popup__close');
const buttonCard      = document.querySelector('.profile__button');
const elem            = document.querySelector('.elements');
const elemLike        = document.querySelectorAll('.element__like');
const trah            = document.querySelectorAll('.element__trash');
const profileTitle    = document.querySelector('.profile__title');
const profileDescr    = document.querySelector('.profile__descr');
const popupInfo       = document.querySelectorAll('.popup__info');
const popupSave       = document.querySelector('.popup__save');
const form            = document.querySelectorAll('.popup__form');
const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// priflePopup
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInfo[0].value;
    profileDescr.textContent = popupInfo[1].value;
    popup[0].classList.remove('popup_opened');
    form[0].reset();
    for (let i = 0; i < 2; i++) {
        popupInfo[i].value = "";
    }
}
form[0].addEventListener('submit', handleFormSubmit);

// cardPopup
function addCard(nameValue, linkValue) {
    const cardTemplate = document.querySelector('#cards').content;
    const card = cardTemplate.querySelector('.element').cloneNode(true);
    card.querySelector('.element__img').src = linkValue;
    card.querySelector('.element__title').textContent = nameValue;
    elem.prepend(card);
}
function popupImg(e) {
    let card = e.target.parentNode;
    const popupImg = document.querySelector('.popup__img');
    const popupCaption = document.querySelector('.popup__caption');
    const image = card.querySelector('.element__img');
    const title = card.querySelector('.element__title');
    popupImg.src = image.src;
    popupCaption.textContent = title.textContent;
}

for (let card of initialCards) {
    addCard(card.name, card.link)
}

form[1].addEventListener('submit', function(e) {
    e.preventDefault();
    addCard(popupInfo[2].value, popupInfo[3].value);
    popup[1].classList.remove('popup_opened');
    for (let i = 2; i < 4; i++) {
        popupInfo[i].value = '';
    }
});

// listeners
profileChange.addEventListener('click', function(e) {
    if (e.target && e.currentTarget) {
        popup[0].classList.add('popup_opened');
    }
});

buttonCard.addEventListener('click', (e) => {
    if (e.target && e.currentTarget) {
        popup[1].classList.add('popup_opened');
    }
})

popupClose.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target) {
            popup.forEach(item => {
                item.classList.remove('popup_opened');
            });
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        popup.forEach(item => {
            item.classList.remove('popup_opened');
        });
    }
});
// like&&trash
elem.addEventListener('click', (e) => {
    if (e.target.className === 'element__like' && e.target.nodeName === 'BUTTON') {
        e.target.classList.add('element__like_active');
    } else {
        e.target.classList.remove('element__like_active');
    }
    if (e.target.className === 'element__trash' && e.target.nodeName === 'IMG') {
        e.target.parentNode.remove();
    }
    if (e.target.className === 'element__img' && e.target.nodeName ==='IMG') {
        popup[2].classList.add('popup_opened');
        popupImg(e)
    }
})

