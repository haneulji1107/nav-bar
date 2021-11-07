const bars = document.querySelector(".bars");
const menus = document.querySelector(".nav-bar__menus");
const sns = document.querySelector(".nav-bar__sns");

const HIDDEN_CLASS = "hidden";

function handleClick() {
  menus.classList.toggle(HIDDEN_CLASS);
  sns.classList.toggle(HIDDEN_CLASS);
}

bars.addEventListener("click", handleClick);
