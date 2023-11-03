const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#conf_password");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd1.value !== pwd2.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "visible";
        pwd2.style.backgroundColor = "#fff0f3";
        pwd2.value = "";
        pwd2.focus();
    } else {
        message.style.display = "none";
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}

// range value display

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// email validator 

const email = document.getElementById('email');
const message2 = document.getElementById('emailmessage');
const validEmail = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

email.addEventListener('focusout', validateEmail);

function validateEmail() {
    if(!(email.value.match(validEmail))) {
        message2.textContent = "Please enter a valid email address.";
        message2.style.visibility = "visible";
        email.style.backgroundColor = "#fff0f3";
        email.value = "";
        email.focus();
    }
    else {
        message2.style.display = "none";
        email.style.backgroundColor = "#fff";
        email.style.color = "#000";
    }
}