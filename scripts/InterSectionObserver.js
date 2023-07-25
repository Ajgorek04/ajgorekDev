const infoDiv = document.querySelectorAll(".info");
const me_info = document.querySelector(".me_info");
const technologies_info = document.querySelector(".technologies_info");

if (windowWidth > 1200) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1 / 3) {
          // Adjust the threshold here /\
          // Dostosuj wartość progu tutaj /\
          me_info.classList.add("offAnim");
          technologies_info.classList.add("offAnim");
        } else {
          me_info.classList.remove("offAnim");
          technologies_info.classList.remove("offAnim");
        }
      });
    },
    {
      threshold: 1 / 3, // Set the threshold to 1/3 (approximately 33.33%)
      // Ustaw próg na 1/3 około 33,33%
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
