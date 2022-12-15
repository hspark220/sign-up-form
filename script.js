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
        passwordError.textContent = "*password needs to be atleast 8 characters long";
    } else if (!containsCapital(password.value)) {
        passwordError.textContent = "*password needs a capital letter present";
    } else if (!containsLower(password.value)) {
        passwordError.textContent = "*password needs a lower case letter present";
    } else if (!containsNumber(password.value)) {
        passwordError.textContent = "*password must contain atleast one number";
    } else if (!containsSpecialChars(password.value)) {
        passwordError.textContent = "*password must contain special characters";
    } 
    console.log(containsLower(password.value));
});

const submit = document.querySelector('button');
submit.addEventListener('click', () => {

})

// password validation checks
const containsSpecialChars= (str) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

const containsNumber = (str) => /\d/.test(str);
const containsCapital = (str) => /[A-Z]/.test(str);
const containsLower = (str) => /[a-z]/.test(str);