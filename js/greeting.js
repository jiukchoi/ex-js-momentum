const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const handleLoginSubmit = event => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};

const paintGreeting = username => {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", handleLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASS);
} else {
  paintGreeting(savedUsername);
}
