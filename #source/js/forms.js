
// Убрать/добавить placeholder при focus/blur 

const email = document.querySelector('.go__mail');
const placeholderEmail = email.placeholder;
email.addEventListener('focus', focusPlaceholderEmail);
email.addEventListener('blur', blurPlaceholderEmail);

function focusPlaceholderEmail(event) {
   email.placeholder = '';
}
function blurPlaceholderEmail(event) {
   email.placeholder = placeholderEmail;
}

document.addEventListener('submit', validation);

function validation(event) {
   if (!email.value) {
      email.style.border = "2px solid #FF0000";
      event.preventDefault();
   }
}


