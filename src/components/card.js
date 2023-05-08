import { openPopup } from "./utils.js";

const popupImage          = document.querySelector('.popup__image');
const cardsList           = document.querySelector('.elements');
const popupImages         = document.querySelector('.popup__img');
const popupCaption        = document.querySelector('.popup__caption');
const cardTemplate        = document.querySelector('#cards').content;

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

function fillInImageData(evt, popupImages, popupCaption) {
    const card = evt.target.parentNode;
    const image = card.querySelector('.element__img');
    const title = card.querySelector('.element__title'); 
    popupImages.src = image.src;
    popupImages.alt = title.textContent;
    popupCaption.textContent = title.textContent;
}

export {createCard, addCard};