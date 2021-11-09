const bars = document.querySelector(".bars");
const menus = document.querySelector(".nav-bar__menus");
const sns = document.querySelector(".nav-bar__sns");

const SHOW_CLASS = "active";

function handleClick() {
  menus.classList.toggle(SHOW_CLASS);
  sns.classList.toggle(SHOW_CLASS);
}

bars.addEventListener("click", handleClick);
