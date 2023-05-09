import { closePopup, openPopup } from "./utils";

const popups               = document.querySelectorAll('.popup');
const buttonsClosePopups   = document.querySelectorAll('.popup__close');
const buttonCard           = document.querySelector('.profile__button');
const popupCreateCard      = document.querySelector('.popup_add-card');


const closePopupOverlay = () => {
    popups.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup_opened')) {
                closePopup(item);
            }
        })
    })
}

const closeByEscape = (evt) => {
    if (evt.key == 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    } 
}

const btnClosePopup = () => {
    buttonsClosePopups.forEach(item => {
        item.addEventListener('click', (e) => {
            const popup = e.target.parentNode.parentNode;
            closePopup(popup);
        });
    });
}

const openPopupCard = () => {
    buttonCard.addEventListener('click', (e) => {
        if (e.target && e.currentTarget) {
            openPopup(popupCreateCard);
        }
    })
} 
export { closeByEscape, closePopupOverlay, btnClosePopup, openPopupCard }
