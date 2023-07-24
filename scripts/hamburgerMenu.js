const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

// Chowanie po nacisnieciu na jakis link
const menuLink = document.querySelectorAll(".menu-link");

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open-menu");
  });
});
