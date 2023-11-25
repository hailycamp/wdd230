const bizTitle = document.getElementById('business');
const message = document.getElementById('invalid-msg');
const validTitle = /[a-zA-Z( )\-]{7,}/;

bizTitle.addEventListener('focusout', validate);

function validate() {
    if(!(bizTitle.value.match(validTitle))) {
        message.textContent = "Please enter a title with only letters, hyphens, and spaces. (7 characters min)";
        message.style.visibility = "visible";
        bizTitle.style.backgroundColor = "#fff0f3";
        bizTitle.value = "";
        bizTitle.focus();
    }
    else {
        message.style.display = "none";
        bizTitle.style.backgroundColor = "#fff";
        bizTitle.style.color = "#000";
    }
}