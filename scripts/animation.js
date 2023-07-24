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

  //END ABOUTME SECTION

  // SECTION PROJECTS

  // END SECTION PROJECTS

  // SECTION CONTACT

  // END SECTION PROJECTS
});
