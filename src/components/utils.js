// openClosePopup
const popup               = document.querySelectorAll('.popup');
const buttonsClosePopup   = document.querySelectorAll('.popup__close');
const buttonCard          = document.querySelector('.profile__button');
const popupCreateCard     = document.querySelector('.popup_add-card');

function openPopup(openPopup) {
    openPopup.classList.add('popup_opened');
}
function closePopup(closePopup) {
    closePopup.classList.remove('popup_opened');
}
// closePopupOverlay
popup.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup_opened')) {
            closePopup(item);
        }
    })
})
// closePopupOfBtn
document.addEventListener('keydown', function(e) {
    if (e.code == 'Escape') {
        popup.forEach(item => {
            item.classList.remove('popup_opened');
        });
    }
});

buttonsClosePopup.forEach(item => {
    item.addEventListener('click', (e) => {
        const popup = e.target.parentNode.parentNode;
            closePopup(popup);
    });
});

buttonCard.addEventListener('click', (e) => {
    if (e.target && e.currentTarget) {
        openPopup(popupCreateCard);
    }
})
export {openPopup, closePopup};