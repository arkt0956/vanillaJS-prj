const form = document.querySelector('#login-form');
const input = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = input.value;
    localStorage.setItem(USERNAME_KEY, username);
    form.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const username = localStorage.getItem(USERNAME_KEY);


if(username === null) {
    form.classList.remove(HIDDEN_CLASSNAME);
    form.addEventListener("submit",onLoginSubmit);
} else {
    paintGreeting(username);
}
