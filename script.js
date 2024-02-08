let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm_password');

function validatePassword() {
    if(password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords don\'t match');
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onchange = validatePassword;