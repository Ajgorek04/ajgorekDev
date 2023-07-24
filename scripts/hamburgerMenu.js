const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const mainAnimateText = document.querySelectorAll(".contentHeader span");
const arrowdownAnimate = document.querySelector(".arrowdown");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open-menu");

  // Wyłaczenie animacji po otwarciu hamburger menu (powoduje bug na safari)
  mainAnimateText.forEach((span) => {
    span.classList.toggle("span-hider");
  });
  arrowdownAnimate.classList.toggle("scrollDownHider");
});

// Chowanie po nacisnieciu na jakis link
const menuLink = document.querySelectorAll(".menu-link");

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open-menu");
  });
});
