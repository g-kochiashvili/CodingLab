const errorEmail = document.getElementById("incorrectInput");
const errorPassword = document.getElementById("incorrectPassword");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailEl = document.getElementById("email").value;
    const passwordvalue = document.getElementById("password").value;
    const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (!emailRegex.test(emailEl)) {
        errorEmail.classList.add("showIncorrectInput");
    }
    else {
        errorEmail.classList.remove("showIncorrectInput");
    }
    if (!(emailEl == "name@example.com" && passwordvalue == "password")) {
        errorPassword.classList.add("showIncorrectPassword");
    }
    else {
        errorPassword.classList.remove("showIncorrectPassword");
    }
})

// button of show password (close and open eye changer)

const changeEye = document.getElementById("openEye");
let i = 0;
function showPassword() {
    const passwordEl = document.getElementById("password");
    if (i === 0) {
        changeEye.src = "./img/closeEye.png";
        passwordEl.type = "text";
        i = 1;
    }
    else if (i === 1) {
        changeEye.src = "./img/openEye.svg";
        passwordEl.type = "password";
        i = 0;
    }
}
const windowDiv = document.querySelector(".loginWindow");
const opacityBackground = document.querySelector(".opacityBackground");
function exitWindow() {
    windowDiv.style.display = "none";
    opacityBackground.style.display = "none";
}
function returnLoginWindow() {
    windowDiv.style.display = "block";
    opacityBackground.style.display = "block";
}

