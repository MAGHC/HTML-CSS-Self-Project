const navToggleBtn = document.querySelector(".nav__toggleBtn");
const menu = document.querySelector(".nav__menu");
const sns = document.querySelector(".nav__sns");

navToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
