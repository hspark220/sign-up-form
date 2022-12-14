// phone number validation / customization
const phonenumber = document.getElementById("phonenumber");

phonenumber.addEventListener('input', (event) => {
    if(phonenumber.value.length == 4 && phonenumber.value[3] != '-') {
        phonenumber.value = phonenumber.value.slice(0,3) + '-' + phonenumber.value.slice(3);
    }
});

// password validation
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


confirmPassword.addEventListener('change', () => {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("password doesn't match")
    } else {
        confirmPassword.setCustomValidity("");
    }
});

// form error messages?
const errorDiv = document.querySelector('.error-message');
const passwordError = document.createElement('p');
errorDiv.appendChild(passwordError);

password.addEventListener('change', () => {
    if(password.value.length < 8){
        passwordError.textContent = "password needs to be atleast 8 characters long";
    } else if (password.valueMissing) {
        passwordError.textContent = "error";
    }
    
});

const submit = document.querySelector('button');
submit.addEventListener('click', () => {

})