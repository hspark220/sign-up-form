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
        
    }
});
