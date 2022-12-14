// phone number customization
const phonenumber = document.getElementById("phonenumber");

phonenumber.addEventListener('input', (event) => {
    if(phonenumber.value.length == 4 && phonenumber.value[3] != '-') {
        phonenumber.value = phonenumber.value.slice(0,3) + '-' + phonenumber.value.slice(3);
    }
});