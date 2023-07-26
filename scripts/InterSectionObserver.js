const aboutme_header = document.querySelector(".aboutme_header");
const infoDiv = document.querySelectorAll(".aboutme");
const me_info = document.querySelector(".me_info");
const technologies_info = document.querySelector(".technologies_info");
const goDown = document.querySelector(".goDown");

// SECTION ABOUT ME
function addOffAnimClass() {
  goDown.classList.add("offAnim");
}

if (windowWidth > 1200) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 4) {
          // Adjust the threshold here /\
          // Dostosuj wartość progu tutaj /\
          me_info.classList.add("offAnim");
          technologies_info.classList.add("offAnim");
          setTimeout(addOffAnimClass, 250);
        } else {
          me_info.classList.remove("offAnim");
          technologies_info.classList.remove("offAnim");
          goDown.classList.remove("offAnim");
        }
      });
    },
    {
      threshold: 1 / 4, // Set the threshold to 1/4
      // Ustaw próg na 1/4
    }
  );
} else if (windowWidth <= 1200) {
  console.log("wiem");
}

infoDiv.forEach((item) => {
  if (windowWidth > 1200) {
    observer.observe(item);
  }
});

// END SECTION ABOUT ME
