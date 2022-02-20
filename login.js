const loginPageSignupButton = document.querySelector("#login-pg-btn-signup");

loginPageSignupButton.addEventListener("click", () => {

    window.location.href = "signup.html";

});

const btnEye = document.querySelector(".btn-eye");
const eyeIcon = document.querySelector(".btn-eye i");
const input = document.querySelector("#password");

let visibility = false;
btnEye.addEventListener("click", () => {

    if (visibility === false) {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        input.setAttribute("type", "text");
        visibility = true;
    } else {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        input.setAttribute("type", "password");
        visibility = false;
    }
});