// Powrot na gore strony po f5
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//

// Zmiana kolorów strony - do zrobienia
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

sun.addEventListener("click", () => {
  moon.style.display = "block";
  sun.style.display = "none";
});

moon.addEventListener("click", () => {
  sun.style.display = "block";
  moon.style.display = "none";
});
//

//

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = function () {
  menu.classList.toggle("open-menu");
};

// Chowanie po nacisnieciu na jakis link
const menuLink = document.querySelectorAll(".menu-link");

menuLink.forEach((link) => {
  link.onclick = function () {
    menu.classList.remove("open-menu");
  };
});

// Hamburger menu end

//

// Animacja wlatywania
const aboutmeHeader = document.querySelector(".aboutme_header");
// const aboutmeHeaderPosition  = aboutmeHeader.getBoundingClientRect().top; //odleglosc elementu od gornej krawedzi strony

const aboutmeHeaderH1 = document.querySelector(".aboutme_header_h1");
const me_info = document.querySelector(".me_info");
const technologies_info = document.querySelector(".technologies_info");
const goDownI = document.querySelector("#goDownI");

window.addEventListener("scroll", () => {
  const windowScrollY = window.scrollY;
  const windowWidth = window.innerWidth;

  const showElement = (
    element,
    opacity = 1,
    translateX = "0",
    translateY = "0"
  ) => {
    element.style.opacity = opacity;
    element.style.transform = `translateX(${translateX}) translateY(${translateY})`;
  };

  //console.log(windowScrollY);

  // Animacja on scroll dla ekranow > 1200
  if (windowScrollY >= 100 && windowWidth) {
    aboutmeHeaderH1.classList.add("aboutmeScrollY");
  } else {
    aboutmeHeaderH1.classList.remove("aboutmeScrollY");
  }

  // Animacja on scroll dla ekranow > 1200
  if (windowScrollY >= 250 && windowWidth > 1200) {
    showElement(me_info);
    showElement(technologies_info);
    showElement(goDownI, 1, "0", "0");
  } else {
    showElement(me_info, 0, "-100rem");
    showElement(technologies_info, 0, "100rem");
    showElement(goDownI, 1, "0", "100rem");
  }

  // Animacja on scroll dla ekranow < 1200
  if (windowScrollY >= 250 && windowWidth < 1200) {
    showElement(me_info);
  }
  if (windowScrollY >= 800 && windowWidth <= 1200) {
    showElement(technologies_info);
  }

  if (windowScrollY >= 1300 && windowWidth <= 1200) {
    showElement(goDownI, 1, "0", "0");
  }

  // section projects
  const projectsHeaderH1 = document.querySelector(".projects_header_h1");

  if (windowScrollY >= 1000) {
    projectsHeaderH1.classList.add("projectsScrollY");
  } else {
    projectsHeaderH1.classList.remove("projectsScrollY");
  }
});
