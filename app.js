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
// const aboutmeHeaderPosition  = aboutmeHeader.getBoundingClientRect().top; //odleglosc elementu od gornej krawedzi strony

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

  // console.log(windowScrollY);

  // SECTION ABOUT ME
  const aboutmeHeader = document.querySelector(".aboutme_header");
  const aboutmeHeaderH1 = document.querySelector(".aboutme_header_h1");
  const me_info = document.querySelector(".me_info");
  const technologies_info = document.querySelector(".technologies_info");
  const goDown = document.querySelector(".goDown");

  if (windowScrollY >= 100) {
    aboutmeHeaderH1.classList.add("aboutmeScrollY");
  } else {
    aboutmeHeaderH1.classList.remove("aboutmeScrollY");
  }

  //

  if (windowScrollY >= 250 && windowWidth > 1200) {
    showElement(me_info);
    showElement(technologies_info);
  } else {
    showElement(me_info, 0, "-100%");
    showElement(technologies_info, 0, "100%");
  }

  if (windowScrollY >= 800 && windowWidth > 1200) {
    showElement(goDown);
  } else {
    showElement(goDown, 0, 0, "100%");
  }

  //

  if (windowScrollY >= 250 && windowWidth <= 1200) {
    showElement(me_info);
  }
  if (windowScrollY >= 700 && windowWidth <= 1200) {
    showElement(technologies_info);
  }

  if (windowScrollY >= 1300 && windowWidth <= 1200) {
    showElement(goDown);
  }
  //END ABOUTME SECTION

  // SECTION PROJECTS
  const projectsHeaderH1 = document.querySelector(".projects_header_h1");
  const swiper = document.querySelector(".swiper");
  const moreprojects = document.querySelector(".moreprojects");

  if (windowScrollY >= 950 && windowWidth > 1200) {
    projectsHeaderH1.classList.add("projectsScrollY");
  } else {
    projectsHeaderH1.classList.remove("projectsScrollY");
  }

  if (windowScrollY >= 1250 && windowWidth > 1200) {
    showElement(swiper);
  } else {
    showElement(swiper, 0, 0, "100%");
  }

  if (windowScrollY >= 1450 && windowWidth <= 1200) {
    projectsHeaderH1.classList.add("projectsScrollY");
  }

  if (windowScrollY >= 1750 && windowWidth <= 1200) {
    showElement(swiper);
  }
  // END SECTION PROJECTS

  // SECTION CONTACT
  const contactHeaderH1 = document.querySelector(".contactH1");
  const list1 = document.querySelector("#list1");
  const list2 = document.querySelector("#list2");
  const list3 = document.querySelector("#list3");
  const list4 = document.querySelector("#list4");

  if (windowScrollY >= 2000 && windowWidth > 1200) {
    contactHeaderH1.classList.add("contactScrollY");
  } else {
    contactHeaderH1.classList.remove("contactScrollY");
  }

  function windowww() {
    if (windowWidth > 1200) {
      if (windowScrollY >= 2400) {
        showElement(list1);
        showElement(list2);
        showElement(list3);
        showElement(list4);
      } else {
        showElement(list1, 0, 0, "250%");
        showElement(list2, 0, 0, "-250%");
        showElement(list3, 0, 0, "250%");
        showElement(list4, 0, 0, "-250%");
      }
    }
  }

  function window2() {
    if (windowWidth < 1200) {
      if (windowScrollY >= 2300) {
        showElement(list1);
      } else {
        showElement(list1, 0, "-250%", 0);
      }

      if (windowScrollY >= 2400) {
        showElement(list2);
      } else {
        showElement(list2, 0, "250%", 0);
      }

      if (windowScrollY >= 2500) {
        showElement(list3);
      } else {
        showElement(list3, 0, "-250%", 0);
      }
      if (windowScrollY >= 2600) {
        showElement(list4);
      } else {
        showElement(list4, 0, "250%", 0);
      }
    }
  }
  window2();
  windowww();
});

//

//

// section projects - slider - usuwanie strzalek przy width < 1200 px | 75 rem

const sliderNext = document.querySelector(".swiper-button-next");
const sliderPrev = document.querySelector(".swiper-button-prev");
const windowWidth = window.innerWidth;

if (windowWidth <= 1200) {
  sliderNext.remove();
  sliderPrev.remove();
}
