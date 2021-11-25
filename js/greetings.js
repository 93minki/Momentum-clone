// const loginForm = document.querySelector("#login-form"); // id임을 명시해야 함.
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the gretting
  paintGreetings(savedUsername);
}
