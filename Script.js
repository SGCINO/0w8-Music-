// JavaScript source code
const togglePasswordVisibility = (inputElement,toggleElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
    else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }

}

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const PasswordCornfirm = document.getElementById("PasswordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");

togglePassword.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, togglePassword);
});

togglePasswordConfirm.addEventListener("click", () => {
    togglePasswordVisibility(PasswordCornfirm, togglePasswordConfirm);
});

function login1() {
    $(this).hide;
    (location).href = 'login.html';
}

function signin1() {
    $(this).hide;
    (location).href = 'registerfile.html';
}
function forgotPassword() {
    $(this).hide;
    (location).href = 'forgotPassword.html';
}

function back() {
    $(this).hide;
    (location).href = 'login.html';
}


const form = document.querySelector('registerfile');

form.addEventListener('submit', (e) => {
    $(e).preventDefult();
    const fd = new FormData('registerfile');
    const obj = Object.formEntries(fd);

    const json = JSON.stringify(obj);
    localStorage.setItem('registerfile', json);

    window.location.href = 'cornfirmRegDetails.html';
})