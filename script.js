const errorEl = document.getElementById("incorrectInput");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailEl = document.getElementById("email").value;
    const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    if (!emailRegex.test(emailEl)) {
        errorEl.classList.add("showIncorrectInput");
    }
    else {
        errorEl.classList.remove("showIncorrectInput");
    }
})

