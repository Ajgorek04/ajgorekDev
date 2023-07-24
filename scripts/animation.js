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

  //END ABOUTME SECTION

  // SECTION PROJECTS
  const projectsHeaderH1 = document.querySelector(".projects_header_h1");
  const swiper = document.querySelector(".swiper");
  const moreprojects = document.querySelector(".moreprojects");

  // END SECTION PROJECTS

  // SECTION CONTACT
  const contactHeaderH1 = document.querySelector(".contactH1");
  const list1 = document.querySelector("#list1");
  const list2 = document.querySelector("#list2");
  const list3 = document.querySelector("#list3");
  const list4 = document.querySelector("#list4");
});
