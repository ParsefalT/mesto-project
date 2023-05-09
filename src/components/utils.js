// openClosePopup
import { closeByEscape } from "./modal";
function openPopup(openPopup) {
    openPopup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}
function closePopup(closePopup) {
    closePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}
export {openPopup, closePopup};