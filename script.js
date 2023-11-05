const errorEmail = document.getElementById("incorrectInput");
const errorPassword = document.getElementById("incorrectPassword");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailEl = document.getElementById("email").value;
    const passwordEl = document.getElementById("password").value;
    const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (!emailRegex.test(emailEl)) {
        errorEmail.classList.add("showIncorrectInput");
    }
    else {
        errorEmail.classList.remove("showIncorrectInput");
    }
    if (!(emailEl == "name@example.com" && passwordEl == "password")) {
        errorPassword.classList.add("showIncorrectPassword");
    }
    else {
        errorPassword.classList.remove("showIncorrectPassword");
    }
})

