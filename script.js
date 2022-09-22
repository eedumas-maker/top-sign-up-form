const form = document.querySelector("form");
const passError = document.querySelector('#passError');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');

passError.textContent = "* Passwords do not match";

let passValue = document.getElementById('password').value;
let confirmValue = document.getElementById('confirmPass').value;

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passError.className = "error";
        checkMatch();
    }
    else {
        showError();
    }
})

confirmPass.addEventListener("input", (event) => {
    if (confirmPass.validity.valid) {
        passError.className = "error";
        checkMatch();
    }
    else {
        showError();
    }
})

form.addEventListener("submit", (event) => {
    if (!password.validity.valid) { // because valid is true/false, there's no "invalid"
        showError();
        event.preventDefault();
    }
})

function showError() {

passValue = document.getElementById('password').value;
confirmValue = document.getElementById('confirmPass').value;

console.log("passValue: " + passValue);
console.log("confirmValue: " +confirmValue);

    if (password.validity.valueMissing || passValue !== confirmValue){
        passError.textContent = "* Passwords do not match";
    }
    else if (password.validity.tooShort){
        passError.textContent = `* Password should be at least ${password.minLength} characters`;
    }

    passError.className = "error active"; //so it gets a fancy border.
}

function checkMatch() {
    passValue = document.getElementById('password').value;
    confirmValue = document.getElementById('confirmPass').value;

    if (passValue == confirmValue) {
        passError.textContent = "Passwords Match!";
        passError.className = "error success";
    }
}